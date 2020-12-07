import { Component, OnInit } from "@angular/core";
import { Tutorial } from "src/app/models/tutorial.model";
import { TutorialService } from "src/app/services/tutorial.service";

@Component({
  selector: "app-add-tutorial",
  templateUrl: "./add-tutorial.component.html",
  styleUrls: ["./add-tutorial.component.scss"],
})
export class AddTutorialComponent implements OnInit {
  // mydata: any;
  tutorial: Tutorial = {
    quizname: "",
    time: "",
    count: "",
    categoryid: "",
  };

  // cid: any = 0;
  submitted = false;
  // catName = " ";

  constructor(private tutorialService: TutorialService) {}

  ngOnInit(): void {}

  saveTutorial(): void {
    const data = {
      quizname: this.tutorial.quizname,
      time: this.tutorial.time,
      count: this.tutorial.count,
      categoryid: this.tutorial.categoryid,
    };

    this.tutorialService.create(data).subscribe(
      (response) => {
        console.log(response);
        this.submitted = true;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  // getTutId() {
  //   this.tutorialService.getcatid(this.catName).subscribe((res) => {
  //     this.mydata = res;
  //     this.cid = this.mydata.id;
  //     console.log(this.mydata.id);
  //     console.log(res);
  //   });
  // }

  newTutorial(): void {
    this.submitted = false;
    this.tutorial = {
      quizname: "",
      time: "",
      count: "",
      categoryid: "",
    };
  }
}
