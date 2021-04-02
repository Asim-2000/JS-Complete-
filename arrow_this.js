const person = {
    talk() {
        setTimeout(function () {
            console.log('this:',this)
        },1000)
    }

}

const person2= {
    
    talk() {

        var self = this;

    setTimeout(function () {
      console.log("this:", self);
    }, 1000);
  },
};

const person3= {
    
    talk() {
    setTimeout(()=> {
      console.log("this:", this);
    }, 1000);
  },
};


person3.talk()
