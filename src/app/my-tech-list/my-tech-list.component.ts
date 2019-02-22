import { Component, OnInit, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { SKILLS } from './mock-skills';

export class Skill {
	id: number;
	name: string;
}

@Component({
  selector: 'app-my-tech-list',
  templateUrl: './my-tech-list.component.html',
  styleUrls: ['./my-tech-list.component.scss']
})

export class MyTechListComponent { 

skills = SKILLS;

animal: string;
  name: string;

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '250px',
      data: {data:this.skills}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(typeof(this.skills));
      this.animal = result;
    });
  }

}

@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'dialog-content.html',
})
export class DialogComponent {
  skills = SKILLS;
  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Skill) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
