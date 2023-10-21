import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from '../../data/dataFake'

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  @Input()
  photoCover: string = ""
  contentTitle: string | undefined = ""
  ingredients: string[] | undefined = [""]
  preparationMethod: string[] | undefined = [""]
  portions: string | undefined = ""
  preparationTime: string | undefined = ""
  private id:string | null = "0"

  constructor(
    private route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe( value =>
      this.id = value.get('id')
    )

    this.setValuesToComponent(this.id)
  }

  setValuesToComponent(id:string | null ) {
    const result = dataFake.filter(
      article => article.id == id
      )[0]

      this.contentTitle = result.recipeName
      this.photoCover = result.photoCover
      this.ingredients = result.ingredients
      this.preparationMethod = result.preparationMethod
      this.portions = result.portions
      this.preparationTime = result.preparationTime
    }

}
