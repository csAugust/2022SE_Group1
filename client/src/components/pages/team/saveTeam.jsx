import {Button, Card, Input, Form} from 'antd';
import React from 'react';
import {ProPageHeader} from '@ant-design/pro-layout';
import {connect} from 'dva';

const FormItem = Form.Item;

const BasicForm = props => {
    const {submitting} = props;
    const [form] = Form.useForm();
    const formItemLayout = {
        labelCol: {
            xs: {
                span: 24,
            },
            sm: {
                span: 7,
            },
        },
        wrapperCol: {
            xs: {
                span: 24,
            },
            sm: {
                span: 12,
            },
            md: {
                span: 10,
            },
        },
    };
    const submitFormLayout = {
        wrapperCol: {
            xs: {
                span: 24,
                offset: 0,
            },
            sm: {
                span: 10,
                offset: 7,
            },
        },
    };

    const onFinish = values => {
        const {dispatch} = props;
        dispatch({
            type: 'team/saveTeam',
            payload: values,
        });
    };

    const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };

    return (
        <ProPageHeader
            content="请根据组队信息创建队伍，创建队伍的人自动成为队长，创建完成后请到我的队伍中查看队伍ID。">
            <Card bordered={false}>
                <Form
                    hideRequiredMark
                    style={{
                        marginTop: 8,
                    }}
                    form={form}
                    name="basic"
                    initialValues={{
                        public: '1',
                    }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                >
                    <FormItem
                        {...formItemLayout}
                        label="课程名称"
                        name="CourseName"
                        rules={[
                            {
                                required: true,
                                message: '请输入课程名称',
                            },
                        ]}
                    >
                        <Input placeholder="选择想要组队的课程"/>
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label="团队名称"
                        name="teamName"
                        rules={[
                            {
                                required: true,
                                message: '请输入团队名称',
                            },
                        ]}
                    >
                        <Input placeholder="给队伍起个名字"/>
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label="组队人数"
                        name="MembersNum"
                        rules={[
                            {
                                required: true,
                                message: '请输入组队人数',
                            },
                        ]}
                    >
                        <Input placeholder="选择组队人数"/>
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label="个人简介（选填）"
                        name="PersonalProfile"
                        rules={[
                            {
                                required: false,
                                message: '请输入个人简介',
                            },
                        ]}
                    >
                        <Input placeholder="介绍一下自己吧"/>
                    </FormItem>
                    <FormItem
                        {...submitFormLayout}
                        style={{
                            marginTop: 32,
                        }}
                    >
                        <Button type="primary" htmlType="submit" loading={submitting}>
                            提交
                        </Button>
                    </FormItem>
                </Form>
            </Card>
        </ProPageHeader>
    );
};

export default connect(({loading}) => ({
    submitting: loading.effects['team/saveTeam'],
}))(BasicForm);
