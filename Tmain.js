
name_of_the_guest_array = [];


    
function submit()
{
    

        var name_of_the_guest = document.getElementById("name_of_the_guest").value;
        console.log(name_of_the_guest);
        name_of_the_guest_array.push(name_of_the_guest);
    

    console.log(name_of_the_guest_array);
    document.getElementById("name_of_the_guest").innerHTML = "";

      
}

function show_name(){
    var display_guest_array = [];

    var lenght_of_name_of_guests_array = name_of_the_guest_array.length;
    console.log(lenght_of_name_of_guests_array);

    for (var k = 0; k < lenght_of_name_of_guests_array; k++) 
    {
        display_guest_array.push(name_of_the_guest_array[k]);
        console.log(display_guest_array);
    }
    console.log(display_guest_array);
    document.getElementById("display_name_with_commas").innerHTML = display_guest_array;
    
    var remove_commas = display_guest_array.join(" ");
    console.log(remove_commas);
    document.getElementById("display_name_without_commas").innerHTML = remove_commas;
}

function sorting()
{
    name_of_the_guest_array.sort();
    console.log(name_of_the_guest_array);

    var display_guest_array_sorting = [];

    var lenght_of_name_of_guests_array = name_of_the_guest_array.length;
    console.log(lenght_of_name_of_guests_array);

    for (var k = 0; k < lenght_of_name_of_guests_array; k++) 
    {
        display_guest_array_sorting.push(name_of_the_guest_array[k]);
        console.log(display_guest_array_sorting);
    }

    var remove_commas = display_guest_array_sorting.join("<br>");
    console.log(remove_commas);

    document.getElementById("display_name_without_commas").innerHTML = remove_commas;
}


function searching(){
    var s= document.getElementById("s1").value;
    var found = 0;
    var j;
    for(j=0;j<name_of_the_guest_array.length;j++)
    {
        if(s==name_of_the_guest_array[j])
        {
            found=found+1;
        }
    }
    document.getElementById("p2").innerHTML="name found "+found+" time/s";
    console.log("name found "+found+" time/s");
}




