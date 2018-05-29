import { getSnapshot, onSnapshot, onPatch } from 'mobx-state-tree';
import { WishList, WishListItem } from "./WishList";
import { reaction } from 'mobx';

it('can create a instance of model', ()=> {
    const item = WishListItem.create({
        "name": "Test Name",
        "price": 28.23,
    })
    expect(item.price).toBe(28.23);
    expect(item.image).toBe('');
    item.changeName("Narnia");
    expect(item.name).toBe("Narnia");
})

it('can create a array of model', ()=> {
    const list = WishList.create({
        items: [
            {
                "name": "Test Name",
                "price": 28.23,
            }
        ]
    });
    expect(list.items.length).toBe(1);
    expect(list.items[0].price).toBe(28.23);
})

it('can add item to wishlist', ()=> {
    const list = WishList.create({
        items: []
    });
    const states = []
    onSnapshot(list, snapshot => {
        states.push(snapshot)
    })
    expect(list.items.length).toBe(0);

    list.add({
        "name": "Test Name",
        "price": 28.23,
        "image": ""
    });
    expect(list.items.length).toBe(1);

    expect(getSnapshot(list)).toMatchSnapshot()
    expect(getSnapshot(list)).toEqual({
        items:[{
            name: "Test Name",
            price: 28.23,
            image: ""
        }]
    })
    expect(states).toMatchSnapshot()
})


