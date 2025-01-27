import { Component } from '@angular/core';

@Component({
  selector: 'app-question-manager',
  templateUrl: './question-manager.component.html',
  styleUrls: ['./question-manager.component.scss'],
})
export class QuestionManagerComponent {
  dateOfInterview: Date | null = null;
  interviewType: string = '';
  clientVendorName: string = '';
  interviewRound: string = '';
  questions: { text: string }[] = [{ text: '' }];

  // Define the array of interview types
  interviewTypes: string[] = ['Vendor', 'Prime vendor', 'Client'];

  // Define the array of interview rounds
  interviewRounds: string[] = ['Round 1', 'Round 2', 'Round 3'];

  addQuestion() {
    this.questions.push({ text: '' });
  }

  removeQuestion(index: number) {
    if (this.questions.length > 1) {
      this.questions.splice(index, 1);
    }
  }

  saveQuestions() {
    // Save logic for questions and other details
    console.log({
      dateOfInterview: this.dateOfInterview,
      interviewType: this.interviewType,
      clientVendorName: this.clientVendorName,
      interviewRound: this.interviewRound,
      questions: this.questions,
    });
  }

  cancelChanges() {
    // Reset the form or handle cancel logic
    this.dateOfInterview = null;
    this.interviewType = '';
    this.clientVendorName = '';
    this.interviewRound = '';
    this.questions = [{ text: '' }];
  }
}
