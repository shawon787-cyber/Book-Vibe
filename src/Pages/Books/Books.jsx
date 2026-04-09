import React, { useContext } from 'react';
import { BookContext } from '../../Context/BookContext';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ReadList from '../../Components/ListedBooks/ReadList';
import WishList from '../../Components/ListedBooks/WishList';

const Books = () => {
        const { storeBook, wishList } = useContext(BookContext);
        console.log(storeBook, wishList)
    return (
        
        <div className='max-w-7xl mx-auto my-8 px-2'>
           
            <Tabs>
                <TabList>
                    <Tab>Read List</Tab>
                    <Tab>Wish List</Tab>
                </TabList>

                <TabPanel>
                    <ReadList></ReadList>
                </TabPanel>
                <TabPanel>
                    <WishList></WishList>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Books;