import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, Subject, throwError } from 'rxjs';
import { InscripcionCurso } from '../models/inscripcionCurso';

@Injectable({
  providedIn: 'root'
})
export class InscripcionCursoService {
  private readonly mockapi_URL = 'https://626988bdf2c0cdabac100e2a.mockapi.io/ApiRest/';
  private inscripcionObservable: Observable<InscripcionCurso[]>;
  private inscripcionSubject: Subject<InscripcionCurso[]>;

  listaInscriptos:InscripcionCurso[]=[
    // new InscripcionCurso(1,1,1,0,new Date()),
    //   new InscripcionCurso(2,2,2,0,new Date()),
    //   new InscripcionCurso(3,3,3,0,new Date()),
    //   new InscripcionCurso(4,4,4,0,new Date())
  ];

  constructor(private http:HttpClient) {    
    this.inscripcionSubject = new Subject();
    this.inscripcionObservable = new Observable((observer) =>{
      observer.next(this.listaInscriptos);
    })  
   }

   private manejoError(error: HttpErrorResponse){
    if(error.error instanceof ErrorEvent){
      console.warn('Error en el frontend:', error.error.message)
    }else{
      console.warn('Error en el backend', error.status, error.message)
    }
   
    return throwError(() => 'Error de comunicación HTTP');
    
   }

   getInscripcionesObservable(): Observable<any> {
    //return this.inscripcionObservable;
    this.inscripcionObservable = this.http.get<InscripcionCurso[]>(`${this.mockapi_URL}/inscripcionCurso`, 
    {      
      headers: new HttpHeaders({
        'content-type': 'application/json'
      })
     }).pipe(catchError(this.manejoError));
     console.log(this.inscripcionObservable);
     return this.inscripcionObservable
  }

  addInscripcionCurso(inscripcion: InscripcionCurso) {
    if(inscripcion != undefined) {
        inscripcion.id = this.obtenerSiguienteId() + 1;
        this.listaInscriptos.push(inscripcion);
        this.inscripcionSubject.next(this.listaInscriptos);
    }
  }
  
  updateInscripcionCurso(inscripcion: InscripcionCurso) {
    if (inscripcion != undefined) {
        this.listaInscriptos[this.listaInscriptos.findIndex(x => x.id == inscripcion.id)] = inscripcion;
        this.inscripcionSubject.next(this.listaInscriptos);
    }
  }

  deleteInscripcionCurso(inscripcion: InscripcionCurso) {
    if (inscripcion != undefined) {
        this.listaInscriptos.splice(this.listaInscriptos.findIndex(x => x.id == inscripcion.id), 1);
        this.inscripcionSubject.next(this.listaInscriptos);
    }
  }
  
  getAllInscripciones() {
    return this.listaInscriptos;
  }

  getInscripcionCursoById(id: number) {
    return this.listaInscriptos[this.listaInscriptos.findIndex(x => x.id == id)];
  }

  obtenerSiguienteId(): number {
    let max = 0;
    for (let i = 0; i < this.listaInscriptos.length; i++) {
      if (this.listaInscriptos[i].id > max)
        max = this.listaInscriptos[i].id;
    }
    return max;
  }  

   
    
}
