//前端I/O的需要测试的模块
//发布评论、发布帖子
import {useState} from "react";

const [value, setValue] = useState("");

    const handleChange = (event) => {
        setValue(event.target.value);
        return value;
    };

