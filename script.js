var app = new Vue({
  el: "#app",
  data: {
    inputVal: 0,
  },
  methods: {
    separator: function(numb) {
        var str = numb.toString().split(".");
        str[0] = str[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        return str.join(".");
    },
  },
  computed: {
    
    a: function () {
      let input = Math.round(this.inputVal * 1.05)
      let output = this.separator(input)
      return output;
    },
    
    b: function(){
      let {IFS, AND, NUMBERVALUE, ROUNDDOWN, MID} = formulajs
      let B2 = Number(this.a.replaceAll(",",""))
      let output = IFS(B2>=1000000,"百萬",B2>=100000,IFS(AND(B2>=100000,B2<=101000),9999,AND(NUMBERVALUE(MID(B2.toString(),2,1))!==1,NUMBERVALUE(MID(B2.toString(),3,4))<=1000),ROUNDDOWN(B2,-4)-1,NUMBERVALUE(MID(B2.toString(),3,4))<=1000,ROUNDDOWN(B2,-4),AND(NUMBERVALUE(MID(B2.toString(),3,4))>1000,NUMBERVALUE(MID(B2.toString(),3,4))<=5000),ROUNDDOWN(B2,-4)+5000,AND(NUMBERVALUE(MID(B2.toString(),3,4))>5000,NUMBERVALUE(MID(B2.toString(),3,4))<=6500),ROUNDDOWN(B2,-4)+6000,AND(NUMBERVALUE(MID(B2.toString(),3,4))>6500,NUMBERVALUE(MID(B2.toString(),3,4))<=8500),ROUNDDOWN(B2,-4)+8000,NUMBERVALUE(MID(B2.toString(),3,4))>8500,ROUNDDOWN(B2,-4)+9999),B2>=10000,IFS(AND(B2>=10000,B2<=10250),9999,AND(NUMBERVALUE(MID(B2.toString(),2,1))!==1,NUMBERVALUE(MID(B2.toString(),3,3))<=150),ROUNDDOWN(B2,-3)-1,NUMBERVALUE(MID(B2.toString(),3,3))<=200,ROUNDDOWN(B2,-3),AND(NUMBERVALUE(MID(B2.toString(),3,3))>200,NUMBERVALUE(MID(B2.toString(),3,3))<=600),ROUNDDOWN(B2,-3)+500,AND(NUMBERVALUE(MID(B2.toString(),3,3))>600,NUMBERVALUE(MID(B2.toString(),3,3))<=850),ROUNDDOWN(B2,-3)+800,NUMBERVALUE(MID(B2.toString(),3,3))>850,ROUNDDOWN(B2,-3)+999),B2>=1000,IFS(AND(B2>=1000,B2<=1020),999,AND(NUMBERVALUE(MID(B2.toString(),2,1))!==1,NUMBERVALUE(MID(B2.toString(),3,2))<50),ROUNDDOWN(B2,-2)-1,NUMBERVALUE(MID(B2.toString(),3,2))<=25,ROUNDDOWN(B2,-2),AND(NUMBERVALUE(MID(B2.toString(),3,2))>25,NUMBERVALUE(MID(B2.toString(),3,2))<=60),ROUNDDOWN(B2,-2)+50,AND(NUMBERVALUE(MID(B2.toString(),3,2))>60,NUMBERVALUE(MID(B2.toString(),3,2))<=85),ROUNDDOWN(B2,-2)+80,NUMBERVALUE(MID(B2.toString(),3,2))>85,ROUNDDOWN(B2,-2)+99),B2>=100,IFS(AND(B2>=100,B2<=102),99,NUMBERVALUE(MID(B2.toString(),2,2))<10,ROUNDDOWN(B2,-2)-1,NUMBERVALUE(MID(B2.toString(),3,1))<=2,ROUNDDOWN(B2,-1),AND(NUMBERVALUE(MID(B2.toString(),3,1))>2,NUMBERVALUE(MID(B2.toString(),3,1))<=6),ROUNDDOWN(B2,-1)+5,NUMBERVALUE(MID(B2.toString(),3,1))>=7,ROUNDDOWN(B2,-1)+10),B2>=10,IFS(AND(B2>=10,B2<=12),9,NUMBERVALUE(MID(B2.toString(),2,1))<=2,ROUNDDOWN(B2,-1)-1,AND(NUMBERVALUE(MID(B2.toString(),2,1))>=3,NUMBERVALUE(MID(B2.toString(),2,1))<=6),ROUNDDOWN(B2,-1)+5,AND(NUMBERVALUE(MID(B2.toString(),2,1))>=7,NUMBERVALUE(MID(B2.toString(),2,1))<=9),ROUNDDOWN(B2,-1)+9),B2<10,B2)
      output = this.separator(output)
      return output
    },
    c: function () {
      let output = Number(this.b.replaceAll(",","")) - Number(this.a.replaceAll(",",""));
      return output
    }, //
  }
});

