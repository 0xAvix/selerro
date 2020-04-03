const INITIAL_STATE = {
  sections: 
    [
      {
        title: "PHONE ACCESSORIES",
        imageUrl: "https://images.pexels.com/photos/983831/pexels-photo-983831.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=2500",
        id: 1,
        linkUrl: "shop/accessories"
    },
    {
        title: "PHONE CASES",
        imageUrl: "https://images.pexels.com/photos/374117/pexels-photo-374117.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=2500",
        id: 2,
        linkUrl: "shop/cases"
    },
    {
        title: "PHONE PARTS",
        imageUrl: "https://images.pexels.com/photos/719399/pexels-photo-719399.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=2500",
        id: 3,
        linkUrl: "shop/parts"
    },
    {
        title: "ANDROID PHONES",
        imageUrl: "https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=2500",
        id: 4,
        size: "large",
        linkUrl: "shop/android"
    },
    {
        title: "iPHONES",
        imageUrl: "https://images.pexels.com/photos/968639/pexels-photo-968639.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=2500",
        id: 5,
        size: "large",
        linkUrl: "shop/iphones"
    }
  ]
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default: 
      return state;
  }
}

export default directoryReducer;