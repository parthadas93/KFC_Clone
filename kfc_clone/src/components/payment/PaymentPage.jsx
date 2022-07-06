import { Input, DatePicker, Select, Form } from "antd";
import { Button } from "../main_button/Button";
import { useState } from "react";
import { useNavigate , Link} from "react-router-dom";
import { Modal, ModalHeader } from "reactstrap";
import "./payment.css";

const { Option } = Select;
export const PaymentPage = () => {
  const [modal, setModal] = useState(false);
  const navigate = useNavigate();
  const [pay, setPay] = useState(false);
  const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };
  const [form] = Form.useForm();
  const retuenFn = () => {
    navigate('/')
  }
  const onFinish = (values) => {
    setTimeout(() => {
      // navigate("/");
      setModal(false);
      setPay(true)
    }, 3000);
    setModal(true);
  };

  return (
    <>
      {pay ? (
        <>
          <div className="returnDiv">
{/* 
          <Button id="return"  onClick={retuenFn}>Return Home</Button> */}
        
            <h4 className="success">Payment Successful</h4>
            <Link style={{ textAlign: "left" }} className="link" to={"/"}>Return Home</Link>
          </div>
        
        </>
      ) : null}
      <img src="debit.png" alt="" />
      <br />
      <br />
      <div className="paymentMain">
        {/* form */}
        <Form onFinish={onFinish}>
          <Form.Item
            name={["user", "name"]}
            // label="Name"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input placeholder="Enter your name" />
          </Form.Item>

          <Form.Item
            name="Card Number"
            rules={[
              {
                required: true,
                message: "Please enter correct card number!",
                max: 16,
              },
            ]}
          >
            <Input
              // prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Card Number"
            />
          </Form.Item>
          <div className="cvv">
            <span>
              <DatePicker
                renderExtraFooter={() => "extra footer"}
                picker="month"
                rules={[
                  {
                    required: true,
                  },
                ]}
              />
            </span>
            <span>
              <Form.Item
                name="price"
                // label="cvv"
                rules={[
                  {
                    required: true,
                    max: 3,
                  },
                ]}
              >
                <Input placeholder="CVV" />
              </Form.Item>
            </span>
          </div>

          <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
            <Button type="primary" htmlType="submit">
              Continue Payment
            </Button>
          </Form.Item>
        </Form>
      </div>
     

      <Modal size="lg" isOpen={modal} toggle={() => setModal(!modal)}>
        <ModalHeader toggle={() => setModal(!modal)}>
          Please wait
        </ModalHeader>
      </Modal>
    </>
  );
};
