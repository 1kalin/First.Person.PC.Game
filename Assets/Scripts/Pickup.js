// min and max times for type change
public var minTypeChange:int = 10;
public var maxTypeChange:int = 30;
 
function Start()
{
    while (true)
    {
        // wait for X seconds
        yield WaitForSeconds(Random.Range(minTypeChange, maxTypeChange));
         
        // set a random type
        SwapType();
    }
}

// variable to hold the type
public var type:int;
 
 
function Awake()
{
    // set a random type to begin
    SwapType();
}
 
function SwapType()
{
    // generate a random number between 1 and 10
    var random:float = Random.Range(1,10);
     
    // set the type
    if (random <= 5) // 50% for type 1
    {
        type = 1;
    }
    else if (random <= 8) // 30% for type 2
    {
        type = 2;
    }
    else // 20% for type 3
    {
        type = 3;
    }
}

// the particles gameobject
public var particles:GameObject;
 
// colours for each type of pickup
public var type1:Color[];
public var type2:Color[];
public var type3:Color[];