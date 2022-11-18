


cardinalitySort([15,2 ]);

function cardinalitySort(nums) {
    // Write your code here

    const binaries = [];
    const cardinality = [];
   nums.map(e=>{
   
        binaries.push(e.toString(2))
     
     
   })

   binaries.map((item, index) => {
    let i = 0;
    for (const lett of item) {
        if(lett === 1){
            i++;
        }
    }
    cardinality.push(i)
    


   })
   console.log(nums);
console.log(binaries);
console.log(cardinality);
   //[15,2]
   //[1111,10]

}