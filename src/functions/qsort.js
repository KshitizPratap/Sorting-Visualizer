export function qsort(array){
    const animation = []
    const temp = [...array]

    sorting(temp, 0, array.length-1, animation)
    return animation
}

function sorting(array, l, r, animation) {
    if(l < r){
        let p = partition(array, l, r, animation)
        sorting(array, l, p, animation)
        sorting(array, p+1, r, animation)
    }
}

function partition(array, l, r, animation){
    let pivot = array[l];
    let i = l-1, j = r+1;

    while(true){
        do{
            i++;
            animation.push([i,l])
            animation.push([i,l])

        }while(array[i] < pivot);
        do{
            j--;

            animation.push([j,l])
            animation.push([j,l])

        }while(array[j] > pivot);

        if(i >= j){
            return j;
        }

        animation.push([i, j, array[i], array[j]])
        let a = array[i]
        array[i] = array[j]
        array[j] = a
    }
}