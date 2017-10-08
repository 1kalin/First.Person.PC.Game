var target : Transform;
var rotationSpeed = 100; 
var myTransform : Transform;

 function Awake()
    {
    myTransform = transform; //cache transform data for easy access/preformance
    }
     
      function Start()
    {
    target = GameObject.FindWithTag("Player").transform; //target the player
     
    }
    
     function Update () {
    //rotate to look at the player
    myTransform.rotation = Quaternion.Slerp(myTransform.rotation,
    Quaternion.LookRotation(target.position - myTransform.position), rotationSpeed*Time.deltaTime);
    }