import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Experience {
  id: number;
  role: string;
  company: string;
  period: string;
  description: string;
}

interface Education {
  id: number;
  degree: string;
  institution: string;
  period: string;
  description: string;
}

interface SkillLevel {
  name: string;
  level: number;
}

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './resume.html',
  styleUrl: './resume.scss'
})
export class Resume {
  experiences: Experience[] = [
    {
      id: 1,
      role: 'Software Developer',
      company: 'CDAC Bangalore',
      period: 'August 2024 - Present',
      description: 'Collaborated with engineering team to develop Qniverse quantum computing web platform. Built frontend interfaces for circuit visualization and integrated REST APIs + GPU-accelerated simulators (Qiskit Aer, cuQuantum).'
    },
    {
      id: 2,
      role: 'Internship',
      company: 'CDAC Bangalore',
      period: 'Jan 2024 - June 2024',
      description: 'Conducted research on Quantum TSP using QAOA. Studied Quantum Random Walks and compared performance with classical algorithms for graph search.'
    }
  ];

  education: Education[] = [
    {
      id: 1,
      degree: 'Masters of Computer Applications',
      institution: 'Tezpur University | Assam, India',
      period: 'November 2022 - July 2025',
      description: 'Focused on advanced computing concepts, software development methodologies, and mathematical foundations of computing.'
    },
    {
      id: 2,
      degree: 'Bachelor of Computer Applications',
      institution: 'Aryabhatta Knowledge University | Patna, India',
      period: 'August 2019 - July 2022',
      description: 'Core computer science fundamentals, programming logic, and systems architecture.'
    }
  ];

  skillLevels: SkillLevel[] = [
    { name: 'Languages: Python, JS, HTML5/CSS3', level: 90 },
    { name: 'Web: React, WordPress, REST APIs', level: 85 },
    { name: 'Quantum: Qiskit, Cirq, CudaQ, QAOA', level: 80 },
    { name: 'HPC: cuQuantum, CUDA Parrallelization', level: 75 },
    { name: 'Tools: Git, Docker, Jupyter, Linux', level: 85 }
  ];
}
