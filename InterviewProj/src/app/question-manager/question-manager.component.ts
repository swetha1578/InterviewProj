import { Component } from '@angular/core';

@Component({
  selector: 'app-question-manager',
  templateUrl: './question-manager.component.html',
  styleUrls: ['./question-manager.component.scss']
})
export class QuestionManagerComponent {
  // Initialize questions array with one empty string
  questions: { text: string }[] = [{ text: '' }]; 
  addQuestion(): void {
    this.questions.push({ text: '' });
  }

  removeQuestion(index: number): void {
    if (this.questions.length > 1) {
      this.questions.splice(index, 1);
    }
  }

  // Save the questions
  saveQuestions(): void {
    // Here you would typically save the questions to a database or API
    console.log('Questions saved:', this.questions);
  }

  cancelChanges(): void {
    this.questions = [{ text: '' }];
  }
}