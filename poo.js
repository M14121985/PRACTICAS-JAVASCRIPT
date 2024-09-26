class Player{
constructor(nombre, _color_sombrero,){
this._nombre=nombre;
this._color_sombrero=_color_sombrero;
this._posicion=0;
this._dinero=1500;
this._vidas=10
}
//metodos
saltar(){
    console.log(`va a saltar ${this._nombre}, vaya salto`)
    this._posicion+=10
}

correr(){
    console.log(`va a correr ${this._nombre}, que velocidad`)
    this._posicion+=20
}

saludar(){
console.log(`hola mi nombre es ${this._nombre}`)

}

}