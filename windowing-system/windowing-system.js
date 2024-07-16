// @ts-check

/**
 * Implement the classes etc. that are needed to solve the
 * exercise in this file. Do not forget to export the entities
 * you defined so they are available for the tests.
 */

export class Size {
 constructor(width=80, height=60){
    this.set(width, height);
 }
 resize = function(width,height){
    this.set(width, height);
 }
 set(width, height){
    this.width = (width<1)?1:width;
    this.height = (height<1)?1:height;
 }
}
export const Position = function(x=0,y=0){
    this.set(x,y);
    this.move = function(x,y){
        this.set(x,y);
    }
}
Position.prototype.set=function (x,y){
        this.x = (x<1)?0:x;
        this.y = (y<0)?0:y;
};

export class ProgramWindow{
    constructor(){
        this.screenSize = new Size(800,600);
        this.size = new Size();
        this.position = new Position();
    }
    resize(size){
        let _w, _h;
        _w = size.width;
        _h = size.height;
        if(size.width+this.position.x > this.screenSize.width){
            _w = this.screenSize.width - this.position.x;
        }
        if(size.height+this.position.y > this.screenSize.height){
            _h = this.screenSize.height - this.position.y;
        }
        this.size= new Size(_w,_h);
    }
    move(position){
         let _x, _y;
        _x = position.x;
        _y = position.y;
        if(this.size.width+position.x > this.screenSize.width){
            _x = this.screenSize.width - this.size.width;
        }
        if(this.size.height+position.y > this.screenSize.height){
            _y = this.screenSize.height - this.size.height;
        }
        position = new Position(_x,_y); 
        this.position = position;
    }
}

export const changeWindow=function(pw){
    pw.resize(new Size(400,300));
    pw.move(new Position(100,150));
    return pw;
}


