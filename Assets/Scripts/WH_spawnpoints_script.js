    // Add this script to a Parent GameObject of the spawnPoints.
    // Note: enemyPrefab will have an AI script attached which will already Tag the Player object
    // so it won't be needed here.
     
    var spawnPoints : Transform[]; // Array of spawn points to be used.
    public var enemyPrefabs : GameObject[]; // Array of different Enemies that are used.
    var amountEnemies = 999999; // Total number of enemies to spawn.
   
     
    function Start()
    {
    Spawn();
    }
    
    
    
    
    
    function Spawn()
    {
    for (i=0; i<amountEnemies; i++) // How many enemies to instantiate total.
    {
    yield WaitForSeconds(25); // How long to wait before another enemy is instantiated.
     
     
    var obj : GameObject = enemyPrefabs[Random.Range(0, enemyPrefabs.length)]; // Randomize the different enemies to instantiate.
    var pos: Transform = spawnPoints[Random.Range(0, spawnPoints.length)]; // Randomize the spawnPoints to instantiate enemy at next.
     
    Instantiate(obj, pos.position, pos.rotation);
    }
    } 