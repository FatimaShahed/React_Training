import { useState, useCallback } from "react";
import React from 'react';

const callback = ({ props }) => {
    console.log("child render");
    return (
        <>

        </>
    );
};

export default React.memo(callback);
