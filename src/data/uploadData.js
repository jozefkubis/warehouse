import { supabase } from './supabaseClient';
import { customers } from './customersData';
import { storeItems } from './storeItemsData';
import { orders } from './ordersData';

async function uploadCustomers() {
    const { data, error } = await supabase
        .from('customers')
        .insert(customers);

    if (error) {
        console.error('Customers data upload failed:', error);
    } else {
        console.log('Customers data uploaded successfully:', data);
    }
}

async function uploadStoreItems() {
    const { data, error } = await supabase
        .from('WarehouseStore')
        .insert(storeItems);

    if (error) {
        console.error('StoreItems data upload failed:', error);
    } else {
        console.log('StoreItems data uploaded successfully:', data);
    }
}

async function uploadOrders() {
    const { data, error } = await supabase
        .from('orders')
        .insert(orders);

    if (error) {
        console.error('Orders data upload failed:', error);
    } else {
        console.log('Orders data uploaded successfully:', data);
    }
}

async function uploadAllData() {
    await uploadCustomers();
    await uploadStoreItems();
    // await uploadOrders();
}

uploadAllData();
