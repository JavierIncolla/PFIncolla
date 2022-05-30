import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, Subject, throwError } from 'rxjs';
import { Curso } from '../models/curso';

@Injectable({
  providedIn: 'root'
})
export class CursoService { 
  private readonly mockapi_URL = 'https://626988bdf2c0cdabac100e2a.mockapi.io/ApiRest/';
  private cursoObservable: Observable<Curso[]>;
  private cursoSubject: Subject<Curso[]>;


  cursoList: Curso[] = [
    // new Curso(1, "JAVA", "Curso de JAVA", "Profe de JAVA",new Date("12/06/2021")),  
    // new Curso(2, "DotNET", "Curso de CSharp","Profe de .Net",new Date("01/8/2021")),
    // new Curso(3, "PYTHON", "Curso de Python","Profe de Python",new Date("01/01/2022")),
    // new Curso(4, "PHP", "Curso de PHP","Profe de PHP",new Date("09/04/2022")),
    // new Curso(5, "ANGULAR", "Curso de Angular","Profe de Angular",new Date("08/25/2021")),
    // new Curso(6, "REACT", "Curso de ReactJS","Profe de ReactJS",new Date("07/17/2020")),
  ];
   

  constructor(private http:HttpClient) {
    this.cursoSubject = new Subject();
    this.cursoObservable = new Observable((observer) =>{
      observer.next(this.cursoList);
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

  getCursoObservable(): Observable<any> {
    //return this.cursoObservable;
    this.cursoObservable =this.http.get<Curso[]>(`${this.mockapi_URL}/curso`, {
      
      headers: new HttpHeaders({
        'content-type': 'application/json'
      })
     }).pipe(catchError(this.manejoError));
     console.log(this.cursoObservable);
     return this.cursoObservable
  }

  addCurso(curso: Curso) {
    if(curso != undefined) {
          // curso.id = this.obtenerSiguienteId() + 1;
          // this.cursoList.push(curso);
          // this.cursoSubject.next(this.cursoList);
        return this.http.post(`${this.mockapi_URL}/curso`, curso);    
    }
    else
    {
      return null;
    }
    
  }    
  updateCurso(curso: Curso) { 
    if (curso != undefined) {
        // this.cursoList[this.cursoList.findIndex(x => x.id == curso.id)] = curso;
        // this.cursoSubject.next(this.cursoList);
    return this.http.put(`${this.mockapi_URL}/curso/${curso.id}`, curso);
    }
    else
    {
      return null
    }
  }
  deleteCurso(curso: Curso) {
    if(curso != undefined) {
        // this.cursoList.splice(this.cursoList.findIndex(x => x.id == curso.id), 1);
        // this.cursoSubject.next(this.cursoList);
        return this.http.delete(`${this.mockapi_URL}/curso/${curso.id}`)
      }
      else
      {
        return null
      }
  }
    
  getCurso(id: number) {  
    //return this.cursoList.find(c => c.id == id);
    let p = new Promise<Curso[]>((resolve, reject) => {
      const error = false;

      this.http.get<Curso[]>(`${this.mockapi_URL}/curso`)
      .subscribe(
        (data) => {
          resolve(data.filter(curso => curso.id == id));
        }
      );
    });

    return p;
  }

  getCursos() {
    return this.cursoList;
  }

  obtenerSiguienteId(): number {
    let max = 0;
    for (let i = 0; i < this.cursoList.length; i++) {
      if (this.cursoList[i].id > max)
        max = this.cursoList[i].id;
    }
    return max;
  }
  
}
