import { add } from 'date-fns';

function fromToday(numDays, withTime = false) {
    const date = add(new Date(), { days: numDays });
    if (!withTime) date.setUTCHours(0, 0, 0, 0);
    return date.toISOString().slice(0, -1);
}

export const orders = [
    {
        created_at: fromToday(-20, true),
        NoOfPcs: 1,
        status: "in-progress",
        notes: "billing address is same as shipping address",
        customerId: 49,
        isPaid: false,
        storeId: 1,
    },
    {
        created_at: fromToday(-10, true),
        NoOfPcs: 2,
        status: "shipped",
        notes: "express shipping",
        customerId: 35,
        isPaid: true,
        storeId: 2,
    },
    {
        created_at: fromToday(-5, true),
        NoOfPcs: 1,
        status: "delivered",
        notes: "gift wrap requested",
        customerId: 8,
        isPaid: true,
        storeId: 3,
    },
    {
        created_at: fromToday(-2, true),
        NoOfPcs: 3,
        status: "in-progress",
        notes: "standard shipping",
        customerId: 22,
        isPaid: false,
        storeId: 4,
    },
    {
        created_at: fromToday(-15, true),
        NoOfPcs: 1,
        status: "delivered",
        notes: "leave package at front door",
        customerId: 1,
        isPaid: true,
        storeId: 5,
    },
    {
        created_at: fromToday(-25, true),
        NoOfPcs: 2,
        status: "shipped",
        notes: "contactless delivery",
        customerId: 16,
        isPaid: false,
        storeId: 6,
    },
    {
        created_at: fromToday(-30, true),
        NoOfPcs: 1,
        status: "in-progress",
        notes: "handle with care",
        customerId: 4,
        isPaid: true,
        storeId: 7,
    },
    {
        created_at: fromToday(-7, true),
        NoOfPcs: 2,
        status: "shipped",
        notes: "delivery before noon",
        customerId: 21,
        isPaid: true,
        storeId: 8,
    },
    {
        created_at: fromToday(-1, true),
        NoOfPcs: 1,
        status: "delivered",
        notes: "leave at side door",
        customerId: 12,
        isPaid: false,
        storeId: 9,
    },
    {
        created_at: fromToday(-13, true),
        NoOfPcs: 3,
        status: "in-progress",
        notes: "customer requested upgrade",
        customerId: 29,
        isPaid: true,
        storeId: 10,
    },
    {
        created_at: fromToday(-8, true),
        NoOfPcs: 2,
        status: "shipped",
        notes: "gift for birthday",
        customerId: 6,
        isPaid: true,
        storeId: 1,
    },
    {
        created_at: fromToday(-9, true),
        NoOfPcs: 1,
        status: "delivered",
        notes: "no signature required",
        customerId: 25,
        isPaid: false,
        storeId: 2,
    },
    {
        created_at: fromToday(-14, true),
        NoOfPcs: 1,
        status: "shipped",
        notes: "rush order",
        customerId: 10,
        isPaid: true,
        storeId: 3,
    },
    {
        created_at: fromToday(-11, true),
        NoOfPcs: 1,
        status: "in-progress",
        notes: "request for a call back",
        customerId: 3,
        isPaid: false,
        storeId: 4,
    },
    {
        created_at: fromToday(-6, true),
        NoOfPcs: 4,
        status: "shipped",
        notes: "priority shipping",
        customerId: 14,
        isPaid: true,
        storeId: 5,
    },
    {
        created_at: fromToday(-18, true),
        NoOfPcs: 2,
        status: "delivered",
        notes: "leave behind porch",
        customerId: 37,
        isPaid: false,
        storeId: 6,
    },
    {
        created_at: fromToday(-17, true),
        NoOfPcs: 1,
        status: "in-progress",
        notes: "gift wrap requested",
        customerId: 19,
        isPaid: true,
        storeId: 7,
    },
    {
        created_at: fromToday(-22, true),
        NoOfPcs: 1,
        status: "delivered",
        notes: "no contact delivery",
        customerId: 13,
        isPaid: true,
        storeId: 8,
    },
    {
        created_at: fromToday(-27, true),
        NoOfPcs: 2,
        status: "shipped",
        notes: "contactless delivery",
        customerId: 30,
        isPaid: false,
        storeId: 9,
    },
    {
        created_at: fromToday(-19, true),
        NoOfPcs: 1,
        status: "in-progress",
        notes: "standard shipping",
        customerId: 28,
        isPaid: false,
        storeId: 10,
    },
    {
        created_at: fromToday(-24, true),
        NoOfPcs: 3,
        status: "shipped",
        notes: "handle with care",
        customerId: 7,
        isPaid: true,
        storeId: 1,
    },
    {
        created_at: fromToday(-3, true),
        NoOfPcs: 1,
        status: "delivered",
        notes: "leave package on porch",
        customerId: 31,
        isPaid: true,
        storeId: 2,
    },
    {
        created_at: fromToday(-12, true),
        NoOfPcs: 2,
        status: "in-progress",
        notes: "rush order",
        customerId: 24,
        isPaid: false,
        storeId: 3,
    },
    {
        created_at: fromToday(-23, true),
        NoOfPcs: 1,
        status: "delivered",
        notes: "customer requested weekend delivery",
        customerId: 11,
        isPaid: true,
        storeId: 4,
    },
    {
        created_at: fromToday(-29, true),
        NoOfPcs: 2,
        status: "shipped",
        notes: "address confirmed",
        customerId: 9,
        isPaid: true,
        storeId: 5,
    },
    {
        created_at: fromToday(-4, true),
        NoOfPcs: 3,
        status: "in-progress",
        notes: "leave in mailroom",
        customerId: 32,
        isPaid: false,
        storeId: 6,
    },
    {
        created_at: fromToday(-21, true),
        NoOfPcs: 1,
        status: "shipped",
        notes: "hand delivery requested",
        customerId: 18,
        isPaid: true,
        storeId: 7,
    },
    {
        created_at: fromToday(-16, true),
        NoOfPcs: 2,
        status: "in-progress",
        notes: "billing and shipping address same",
        customerId: 20,
        isPaid: false,
        storeId: 8,
    },
    {
        created_at: fromToday(-28, true),
        NoOfPcs: 1,
        status: "delivered",
        notes: "leave at front door",
        customerId: 23,
        isPaid: true,
        storeId: 9,
    },
    {
        created_at: fromToday(-26, true),
        NoOfPcs: 3,
        status: "shipped",
        notes: "gift wrap for birthday",
        customerId: 27,
        isPaid: true,
        storeId: 10,
    },
    {
        created_at: fromToday(-34, true),
        NoOfPcs: 2,
        status: "in-progress",
        notes: "urgent delivery request",
        customerId: 33,
        isPaid: false,
        storeId: 1,
    },
    {
        created_at: fromToday(-31, true),
        NoOfPcs: 1,
        status: "shipped",
        notes: "leave with neighbor",
        customerId: 34,
        isPaid: true,
        storeId: 2,
    },
    {
        created_at: fromToday(-33, true),
        NoOfPcs: 3,
        status: "in-progress",
        notes: "same-day shipping",
        customerId: 36,
        isPaid: true,
        storeId: 3,
    },
    {
        created_at: fromToday(-35, true),
        NoOfPcs: 1,
        status: "shipped",
        notes: "special instructions: fragile",
        customerId: 38,
        isPaid: false,
        storeId: 4,
    },
    {
        created_at: fromToday(-38, true),
        NoOfPcs: 2,
        status: "delivered",
        notes: "confirm the delivery address",
        customerId: 39,
        isPaid: true,
        storeId: 5,
    },
    {
        created_at: fromToday(-40, true),
        NoOfPcs: 1,
        status: "in-progress",
        notes: "order confirmation pending",
        customerId: 40,
        isPaid: false,
        storeId: 6,
    },
    {
        created_at: fromToday(-41, true),
        NoOfPcs: 2,
        status: "shipped",
        notes: "leave at back door",
        customerId: 41,
        isPaid: true,
        storeId: 7,
    },
    {
        created_at: fromToday(-42, true),
        NoOfPcs: 3,
        status: "delivered",
        notes: "leave package with doorman",
        customerId: 42,
        isPaid: false,
        storeId: 8,
    },
    {
        created_at: fromToday(-45, true),
        NoOfPcs: 1,
        status: "in-progress",
        notes: "check customer address",
        customerId: 43,
        isPaid: true,
        storeId: 9,
    },
    {
        created_at: fromToday(-46, true),
        NoOfPcs: 2,
        status: "delivered",
        notes: "signature required",
        customerId: 44,
        isPaid: false,
        storeId: 10,
    }
];
