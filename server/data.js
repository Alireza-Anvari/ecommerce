export const product = {
  po: [
    { id: 1, type: "مردانه" },
    { id: 2, type: "زنانه" },
    { id: 3, type: "کودک" },
],
  digi: [
    { id: 1, type: "موبایل" },
    { id: 2, type: "لپ تاپ" },
    { id: 3, type: "وسایل جانبی" },
],

  beh: [
    { id: 1, type: "شوینده" },
    { id: 2, type: "آرایشی " },
    { id: 3, type: " تقویتی" },
],
};


export const productHead=()=>{
    return Object.keys(product).map(pro=>pro)
}


