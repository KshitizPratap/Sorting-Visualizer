export function heapsort(array){
    const animation = []
    const temp = [...array]

    heap(temp, array.length, animation)
    return animation
}
function heap(arr, n, animation){
    buildheap(arr, n, animation);
    for(let i=n-1; i>=1; i--){
        animation.push([0, i])
        animation.push([0, i])
        animation.push([0, i, arr[0], arr[i]])

        let temp = arr[i];
        arr[i] = arr[0]
        arr[0] = temp;

        maxheapify(arr, i, 0, animation)
    }
}
function buildheap(arr, n, animation){
    for(let i=(n-2)/2; i>=0; i--){
        maxheapify(arr, n, i, animation)
    }
}
function maxheapify(arr, n, i, animation){
    let large = i, left = 2*i+1, right = 2*i+2;
    if(left < n && arr[left] > arr[large]){
        const temp = [large, left]
        large = left;
        animation.push(temp);
        animation.push(temp);
    }
    if(right < n && arr[right] > arr[large]){
        const temp = [large, right]
        large = right;
        animation.push(temp);
        animation.push(temp);
    }

    if(large !== i){
        const temp = [i, large, arr[i], arr[large]]
        animation.push(temp)
        const t = arr[large]
        arr[large] = arr[i]
        arr[i] = t;
        maxheapify(arr, n, large, animation)
    }
}