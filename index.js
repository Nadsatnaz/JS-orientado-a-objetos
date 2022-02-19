import {Cliente} from "./Cliente.js"
import { ContaCorrente} from "./ContaCorrente.js";
import { ContaPoupanca } from "./ContaPoupanca.js";
import{ Conta } from  "./Conta.js"
const cliente1 = new Cliente ('ricciardo',11122233344);

const ContaCorrenteRicardo = new Conta(0, cliente1, 1001);


const contaPoupancacliente= new Conta(50, cliente1, 1001)

console.log(ContaCorrenteRicardo)
console.log(contaPoupancacliente)



