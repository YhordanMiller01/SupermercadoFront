import { Component , OnInit} from '@angular/core';
import { Fruta } from 'src/app/interfaces/fruta';
import { FrutaService } from 'src/app/services/fruta.service';

@Component({
  selector: 'app-frutas',
  templateUrl: './frutas.component.html',
  styleUrls: ['./frutas.component.scss']
})
export class FrutasComponent implements OnInit {

  frutas: Fruta[] = [];

  constructor(public frutaService: FrutaService) { }


  ngOnInit(): void {
    this.frutaService.indexFruta().subscribe((data: Fruta[])=>{
      this.frutas = data;
      console.log(this.frutas);
    })
  }

  EliminarFruta(id:any){
    this.frutaService.eliminarFruta(id).subscribe(res => {
         this.frutas = this.frutas.filter(item => item.id !== id);
         console.log('Fruta eliminada correctamente!');
    })
  }

}
