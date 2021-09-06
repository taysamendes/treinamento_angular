import { Component, OnInit } from '@angular/core';
import { Frase } from '../shared/frase.model';
import { FRASES } from './frases-mock'

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {

  public frases: Frase[] = FRASES
  public instrucao: string = 'Traduza a frase:'
  public resposta: string = ''
  public rodada: number = 0
  public progresso: number = 0
  public rodadaFrase!: Frase

  constructor() {
    this.atualizaRodada()
  }

  ngOnInit(): void {
  }

  public atualizaResposta(resposta: Event): void {
    this.resposta = (<HTMLInputElement>resposta.target).value
  }

  public verificarResposta(): void {
    if (this.rodadaFrase.frasePtBr == this.resposta) {
      alert('A tradução está correcta!')
      //Trocar a frase da rodada
      this.rodada++

      //Progresso
      this.progresso = this.progresso + (100 / this.frases.length)

      //Atualiza o objeto rodadaFrase
      this.atualizaRodada()
    } else {
      alert('Resposta incorrecta!')
    }

  }

  public atualizaRodada(): void {
    //Define a logica da rodada baseado em alguma 
    this.rodadaFrase = this.frases[this.rodada]

    //Limpar resposta do usuario
    this.resposta = ''
  }

}
