import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

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
  formData: FormData = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  onSubmit(): void {
    // For now, just log the form data
    // You can integrate with a backend API or email service
    console.log('Form submitted:', this.formData);

    // Create mailto link as fallback
    const mailtoLink = `mailto:your.email@example.com?subject=${encodeURIComponent(this.formData.subject || 'Contact from Portfolio')}&body=${encodeURIComponent(
      `Name: ${this.formData.name}\nEmail: ${this.formData.email}\n\nMessage:\n${this.formData.message}`
    )}`;

    window.open(mailtoLink, '_blank');

    // Reset form
    this.formData = {
      name: '',
      email: '',
      subject: '',
      message: ''
    };
  }
}
