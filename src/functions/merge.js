export const merging = (array) => {
  const animation   = [];

  if(array.length <= 1)  return array;
  const auxArray = [...array];
  
  mergeSort(auxArray, 0, array.length - 1, animation);
  return animation;
}

function mergeSort(auxArray, l, r, animation){
   if(l < r){
       const m = Math.floor(l + (r-l) / 2);
       mergeSort(auxArray, l, m, animation);
       mergeSort(auxArray, m+1, r, animation);
       merge(auxArray, l, m, r, animation)
   }
}

function merge(auxArray, l, m, r, animation){
   let left = [], right = [];
   let n1 = m-l+1, n2 = r-m;

   for(let i=0; i<n1; i++){
       left[i] = auxArray[l+i];
   }
   for(let i=0; i<n2; i++){
       right[i] = auxArray[m+1+i];
   }

   let i=0, j=0, k=l;
   while(i<n1 && j<n2){
       let a = l+i, b = m+1+j;
       let temp = {a, b};
       animation.push(temp);
       animation.push(temp)

       if(left[i] <= right[j]){
           auxArray[k] = left[i]
           const p = left[i]
           const height = {k, p}
           animation.push(height)
           i++;
       }
       else{
           auxArray[k] = right[j]
           const p = right[j]
           const height = {k, p}
           animation.push(height)
           j++
       }
       k++
   }
   while(i<n1){
       let a = l+i;
       const b = -2;
       let temp = {a, b}
       animation.push(temp)
       animation.push(temp)

       const p = left[i]
       const height = {k, p}
       animation.push(height)

       auxArray[k++] = left[i++]
   }
   while(j<n2){
       let a = m+1+j
       const b = -1;
       let temp = {a, b}

       animation.push(temp)
       animation.push(temp)

       const p = right[j]
       const height = {k, p}
       animation.push(height)

       auxArray[k++] = right[j++]
   }
}