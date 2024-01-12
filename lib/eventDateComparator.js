"use strict";
/*
 * This file is part of the Cronica-IT project (https://github.com/cronica-it).
 * Copyright (c) 2023 Liviu Ionescu. All rights reserved.
 *
 * Permission to use, copy, modify, and/or distribute this software
 * for any purpose is hereby granted, under the terms of the MIT license.
 *
 * If a copy of the license was not distributed with this file, it can
 * be obtained from https://opensource.org/license/mit/.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.eventDateComparator = void 0;
const compareDates = ((aEventDate, bEventDate) => {
    return bEventDate.getTime() - aEventDate.getTime();
});
exports.eventDateComparator = ((a, b) => {
    const aEventDate = new Date(a.metadata.eventDateISO);
    const bEventDate = new Date(b.metadata.eventDateISO);
    // logger.info(aEventDate);
    // logger.info(bEventDate);
    const value = compareDates(aEventDate, bEventDate);
    // logger.info(value)
    if (value !== 0) {
        return value;
    }
    const aEventEndDate = new Date(a.metadata.eventEndDateISO);
    const bEventEndDate = new Date(b.metadata.eventEndDateISO);
    return compareDates(aEventEndDate, bEventEndDate);
});