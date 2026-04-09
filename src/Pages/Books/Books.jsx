import React, { useContext, useState } from 'react';
import { BookContext } from '../../Context/BookContext';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ReadList from '../../Components/ListedBooks/ReadList';
import WishList from '../../Components/ListedBooks/WishList';

const Books = () => {
    const [sortingType, setSortingType] = useState("");
    console.log(sortingType);
        const { storeBook, wishList } = useContext(BookContext);
        console.log(storeBook, wishList)
    return (
        
        <div className='max-w-7xl mx-auto my-8 px-2'>
          <div className='flex items-center justify-center my-2.5'>
             <div className="dropdown dropdown-start">
  <div tabIndex={0} role="button" className="btn m-1">Sort by: {sortingType} ⬇️</div>
  <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-40 p-2 shadow-sm">
    <li onClick={()=> setSortingType('pages')}><a>Pages</a></li>
    <li onClick={()=> setSortingType('rating')}><a>Rating</a></li>
  </ul>
</div>
          </div>
            <Tabs>
                <TabList>
                    <Tab>Read List</Tab>
                    <Tab>Wish List</Tab>
                </TabList>

                <TabPanel>
                    <ReadList sortingType={sortingType}></ReadList>
                </TabPanel>
                <TabPanel>
                    <WishList sortingType={sortingType}></WishList>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Books;