import { Component, inject, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { finalize } from 'rxjs';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class Contact {
  private http = inject(HttpClient);
  private cdr = inject(ChangeDetectorRef);

  // Web3Forms Access Key
  private readonly web3FormsAccessKey = 'f8dbf166-b37f-443a-b117-6ef09e84825f';
  private readonly web3FormsApiUrl = 'https://api.web3forms.com/submit';

  formData: FormData = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  isSubmitting = false;
  submitSuccess = false;
  submitError = false;

  onSubmit(form?: NgForm): void {
    if (this.isSubmitting) return;
    if (form && form.invalid) return; // double check validation

    this.isSubmitting = true;
    this.submitSuccess = false;
    this.submitError = false;

    const payload = {
      access_key: this.web3FormsAccessKey,
      ...this.formData
    };

    this.http.post(this.web3FormsApiUrl, payload)
      .subscribe({
        next: (response: any) => {
          this.isSubmitting = false;
          if (response.success) {
            this.submitSuccess = true;
            this.resetForm();
            this.cdr.detectChanges(); // Force UI update

            setTimeout(() => {
              this.submitSuccess = false;
              this.cdr.detectChanges(); // Force UI update when message hides
            }, 5000);
          } else {
            this.submitError = true;
            this.cdr.detectChanges(); // Force UI update
          }
        },
        error: () => {
          this.isSubmitting = false;
          this.submitError = true;
          this.cdr.detectChanges(); // Force UI update
        }
      });
  }

  resetForm(): void {
    this.formData = {
      name: '',
      email: '',
      subject: '',
      message: ''
    };
  }
}
