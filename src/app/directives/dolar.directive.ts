import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appDolar]'
})
export class DolarDirective {

  constructor(private ele:ElementRef) { }

  @HostListener('keyup',['$event'])
  onKeyUp(e:any){
  //   if(!((e.keyCode >= 48 && e.keyCode < 58) || e.key == ".")){
  //     var str:String = this.ele.nativeElement.value;
  //     this.ele.nativeElement.value = str.substring(0,str.length-1);
  //     return;
  //   }
    // if(this.ele.nativeElement.value === '$' || this.ele.nativeElement.value === '$ '){
    //   this.ele.nativeElement.value = "";
    //   return;
    // }
  //   var str:String = this.ele.nativeElement.value;
  //   if(this.ele.nativeElement.value.length !== 0 && !str.startsWith('$')){
  //     this.ele.nativeElement.value = '$ '+str;
  //   }
  //   if(str.split('.')[1]?.length > 2 || str.split('.').length > 2){
  //     this.ele.nativeElement.value = str.substring(0,str.length-1);
  //   }
  //   console.log(e,this.ele,this.ele.nativeElement.value);
  // }
  const pattern1 = /^\d+$/;
  const pattern2 = /^\$\s?\d+(\.\d{1,2})?$/;
  const pattern3 = /^\$\s?\d+\.(\d{1,2})?$/;
  const valueToTest = "$ 100.53";

  if(this.ele.nativeElement.value === '$' || this.ele.nativeElement.value === '$ '){
    this.ele.nativeElement.value = "";
  }
  var str = this.ele.nativeElement.value;
  if (pattern1.test(str)) {
    this.ele.nativeElement.value = '$ '+str
  }else if(pattern2.test(str)){

  }else if(pattern3.test(str)){

  }else{
    this.ele.nativeElement.value = str.substring(0,str.length-1);
    if(this.ele.nativeElement.value === '$' || this.ele.nativeElement.value === '$ '){
      this.ele.nativeElement.value = "";
    }
  }
}
}
