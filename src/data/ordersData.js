import { add } from 'date-fns';

function fromToday(numDays, withTime = false) {
    const date = add(new Date(), { days: numDays });
    if (!withTime) date.setUTCHours(0, 0, 0, 0);
    return date.toISOString().slice(0, -1);
}

export const orders = [
    {
        id: 1,
        created_at: fromToday(-20, true),
        NoOfPcs: 1,
        status: "in-progress",
        notes: "billing address is same as shipping address",
        isPaid: false,
        customerId: 1,
        storeId: 1,
    },
    {
        id: 2,
        created_at: fromToday(-10, true),
        NoOfPcs: 2,
        status: "shipped",
        notes: "express shipping",
        isPaid: true,
        customerId: 2,
        storeId: 2,
    },
    {
        id: 3,
        created_at: fromToday(-5, true),
        NoOfPcs: 1,
        status: "delivered",
        notes: "gift wrap requested",
        isPaid: false,
        customerId: 3,
        storeId: 3,
    },
    {
        id: 4,
        created_at: fromToday(-2, true),
        NoOfPcs: 3,
        status: "in-progress",
        notes: "standard shipping",
        isPaid: true,
        customerId: 4,
        storeId: 4,
    },
    {
        id: 5,
        created_at: fromToday(-15, true),
        NoOfPcs: 1,
        status: "delivered",
        notes: "leave package at front door",
        isPaid: false,
        customerId: 5,
        storeId: 5,
    },
    {
        id: 6,
        created_at: fromToday(-1, true),
        NoOfPcs: 1,
        status: "shipped",
        notes: "express shipping",
        isPaid: true,
        customerId: 6,
        storeId: 6,
    },
    {
        id: 7,
        created_at: fromToday(-16, true),
        NoOfPcs: 1,
        status: "in-progress",
        notes: "standard shipping",
        isPaid: false,
        customerId: 7,
        storeId: 7,
    },
    {
        id: 8,
        created_at: fromToday(-7, true),
        NoOfPcs: 3,
        status: "delivered",
        notes: "billing address is same as shipping address",
        isPaid: true,
        customerId: 8,
        storeId: 8,
    },
    {
        id: 9,
        created_at: fromToday(-18, true),
        NoOfPcs: 2,
        status: "shipped",
        notes: "gift wrap requested",
        isPaid: true,
        customerId: 9,
        storeId: 9,
    },
    {
        id: 10,
        created_at: fromToday(-30, true),
        NoOfPcs: 1,
        status: "delivered",
        notes: "leave package at front door",
        isPaid: false,
        customerId: 10,
        storeId: 10,
    },
    {
        id: 11,
        created_at: fromToday(-1, true),
        NoOfPcs: 1,
        status: "shipped",
        notes: "express shipping",
        isPaid: true,
        customerId: 11,
        storeId: 1,
    },
    {
        id: 12,
        created_at: fromToday(-16, true),
        NoOfPcs: 1,
        status: "in-progress",
        notes: "standard shipping",
        isPaid: false,
        customerId: 12,
        storeId: 2,
    },
    {
        id: 13,
        created_at: fromToday(-7, true),
        NoOfPcs: 3,
        status: "delivered",
        notes: "billing address is same as shipping address",
        isPaid: true,
        customerId: 13,
        storeId: 3,
    },
    {
        id: 14,
        created_at: fromToday(-18, true),
        NoOfPcs: 2,
        status: "shipped",
        notes: "gift wrap requested",
        isPaid: true,
        customerId: 14,
        storeId: 4,
    },
    {
        id: 15,
        created_at: fromToday(-30, true),
        NoOfPcs: 1,
        status: "delivered",
        notes: "leave package at front door",
        isPaid: false,
        customerId: 15,
        storeId: 5,
    },
    {
        id: 16,
        created_at: fromToday(-1, true),
        NoOfPcs: 1,
        status: "shipped",
        notes: "express shipping",
        isPaid: true,
        customerId: 16,
        storeId: 6,
    },
    {
        id: 17,
        created_at: fromToday(-16, true),
        NoOfPcs: 1,
        status: "in-progress",
        notes: "standard shipping",
        isPaid: false,
        customerId: 17,
        storeId: 7,
    },
    {
        id: 18,
        created_at: fromToday(-7, true),
        NoOfPcs: 3,
        status: "delivered",
        notes: "billing address is same as shipping address",
        isPaid: true,
        customerId: 18,
        storeId: 8,
    },
    {
        id: 19,
        created_at: fromToday(-18, true),
        NoOfPcs: 2,
        status: "shipped",
        notes: "gift wrap requested",
        isPaid: true,
        customerId: 19,
        storeId: 9,
    },
    {
        id: 20,
        created_at: fromToday(-30, true),
        NoOfPcs: 1,
        status: "delivered",
        notes: "leave package at front door",
        isPaid: false,
        customerId: 20,
        storeId: 10,
    },
    {
        id: 21,
        created_at: fromToday(-1, true),
        NoOfPcs: 1,
        status: "shipped",
        notes: "express shipping",
        isPaid: true,
        customerId: 21,
        storeId: 1,
    },
    {
        id: 22,
        created_at: fromToday(-16, true),
        NoOfPcs: 1,
        status: "in-progress",
        notes: "standard shipping",
        isPaid: false,
        customerId: 22,
        storeId: 2,
    },
    {
        id: 23,
        created_at: fromToday(-7, true),
        NoOfPcs: 3,
        status: "delivered",
        notes: "billing address is same as shipping address",
        isPaid: true,
        customerId: 23,
        storeId: 3,
    },
    {
        id: 24,
        created_at: fromToday(-18, true),
        NoOfPcs: 2,
        status: "shipped",
        notes: "gift wrap requested",
        isPaid: true,
        customerId: 24,
        storeId: 4,
    },
    {
        id: 25,
        created_at: fromToday(-30, true),
        NoOfPcs: 1,
        status: "delivered",
        notes: "leave package at front door",
        isPaid: false,
        customerId: 25,
        storeId: 5,
    },
    {
        id: 26,
        created_at: fromToday(-1, true),
        NoOfPcs: 1,
        status: "shipped",
        notes: "express shipping",
        isPaid: true,
        customerId: 26,
        storeId: 6,
    },
    {
        id: 27,
        created_at: fromToday(-16, true),
        NoOfPcs: 1,
        status: "in-progress",
        notes: "standard shipping",
        isPaid: false,
        customerId: 27,
        storeId: 7,
    },
    {
        id: 28,
        created_at: fromToday(-7, true),
        NoOfPcs: 3,
        status: "delivered",
        notes: "billing address is same as shipping address",
        isPaid: true,
        customerId: 28,
        storeId: 8,
    },
    {
        id: 29,
        created_at: fromToday(-18, true),
        NoOfPcs: 2,
        status: "shipped",
        notes: "gift wrap requested",
        isPaid: true,
        customerId: 29,
        storeId: 9,
    },
    {
        id: 30,
        created_at: fromToday(-30, true),
        NoOfPcs: 1,
        status: "delivered",
        notes: "leave package at front door",
        isPaid: false,
        customerId: 30,
        storeId: 10,
    },
    {
        id: 31,
        created_at: fromToday(-1, true),
        NoOfPcs: 1,
        status: "shipped",
        notes: "express shipping",
        isPaid: true,
        customerId: 31,
        storeId: 1,
    },
    {
        id: 32,
        created_at: fromToday(-16, true),
        NoOfPcs: 1,
        status: "in-progress",
        notes: "standard shipping",
        isPaid: false,
        customerId: 32,
        storeId: 2,
    },
]

