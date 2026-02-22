import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  technologies: string[];
  imageUrl: string;
  liveUrl: string;
  githubUrl: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.scss'
})
export class Projects {
  filterTabs = ['All', 'Web App', 'Mobile', 'Backend'];
  activeFilter = 'All';

  projects: Project[] = [
    {
      id: 1,
      title: 'Quantum Circuit Composer',
      description: 'Interactive drag-and-drop web UI for quantum circuit design using JavaScript and Accelerated Qiskit Aer simulations via cuQuantum API integration (10x speed-up).',
      category: 'Web App',
      technologies: ['JavaScript', 'Qiskit', 'cuQuantum', 'API APIs'],
      imageUrl: '',
      liveUrl: '#',
      githubUrl: 'https://github.com/rahulsingh558'
    },
    {
      id: 2,
      title: 'MealToHeal Platform',
      description: 'A full-stack food ordering platform featuring an Angular frontend and a scalable Node.js backend to handle large-scale user orders.',
      category: 'Web App',
      technologies: ['Angular', 'Node.js', 'Express', 'MongoDB'],
      imageUrl: '',
      liveUrl: '#',
      githubUrl: 'https://github.com/rahulsingh558'
    },
    {
      id: 3,
      title: 'The Piquant Pan',
      description: 'A comprehensive full-stack application built with Angular and Node.js for managing a customizable food ordering and delivery system.',
      category: 'Web App',
      technologies: ['Node.js', 'Express', 'Angular', 'MongoDB'],
      imageUrl: '',
      liveUrl: '#',
      githubUrl: 'https://github.com/rahulsingh558'
    }
  ];

  get filteredProjects(): Project[] {
    if (this.activeFilter === 'All') {
      return this.projects;
    }
    return this.projects.filter(p => p.category === this.activeFilter);
  }

  setFilter(tab: string): void {
    this.activeFilter = tab;
  }
}
