
  
  class smartPhone{
    
    
    constructor(IMEI,OS,cameraSpecs,RAM,networkTypes,simCapacity){
      this.IMEI = IMEI;
      this.OS=OS;
      this.cameraSpecs = cameraSpecs;
      this.RAM = RAM;
      this.networkTypes = networkTypes;
      this.simCapacity= simCapacity;
      
      
      
    }
    
    makeCall(){
      console.log("call dialing.....");
      
    }
    sendText(){
      console.log("Sending.........Sent");
      
    }
    
    takePicture(){
      console.log("click!......");
      
    }
    openBrowser(){
      console.log(".....Enter a URL address");
    }
    
    downloadApps(){
      console.log("go to the provided store of the smart Phone ")
      
    }
    
  }
  
  class SamsungSmartPhone extends smartPhone {
  constructor(IMEI,OS,cameraSpecs,RAM,networkTypes,simCapacity,model) {
    super(IMEI,OS,cameraSpecs,RAM,networkTypes,simCapacity); 
    
    this.model =  model;
    
  }

 
  inherited(){
   super.openBrowser();
   super.takePicture();
   super.sendText();
   super.makeCall() ;
   super.downloadApps();
  }
  downloadApps(){
    console.log("Open Google play store");
    
  }
  
  downloadFreeMovies(){
    console.log("Great....just navigate to pirated movies websites!");
    
  }
  openPlayMusicApp(){
    
    console.log("...Select a song and Press Play");
  }
}

 class iPhoneSmartPhone extends smartPhone {
  constructor(IMEI,OS,cameraSpecs,RAM,networkTypes,simCapacity,model) {
    super(IMEI,OS,cameraSpecs,RAM,networkTypes,simCapacity); 
    
    this.model =  model;
    
  }

 
  inherited(){
   super.openBrowser();
   super.takePicture();
   super.sendText();
   super.makeCall() ;
   super.downloadApps();
  }
  downloadApps(){
    console.log("Open App store");
    
  }

  openItunes(){
    
    console.log("Only on IPhone...Select a song and Press Play");
  }
}

  
 
  
  let phone1 =  new SamsungSmartPhone("223","android","12MP","16gb",["2g","3g"],"dual","galaxy j5");
  
  let phone2 =  new iPhoneSmartPhone("223","IOS","16MP","16gb",["2g","3g","4g"],"single","7s");
  
  
 
  phone1.downloadApps();
  phone2.openItunes();
  phone2.model;
  
  
  
  
