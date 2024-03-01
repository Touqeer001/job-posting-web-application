import React, { useState, useEffect } from "react";
import AdminMenu from "../Admin/AdminMenu";
import { Select } from "antd";
import axios from "axios";
import toast from "react-hot-toast";
const { Option } = Select;

const CreateJob = () => {
  const [description, setDescription] = useState("");
  const [company, setCompany] = useState("");
  const [skill, setSkill] = useState("");
  const [experince, setExperince] = useState("");
  const [salary, setSalary] = useState("");
  const [name, setName] = useState("");
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState("");

  //get all category
  const getAllCategory = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:8080/api/v1/category/get-category"
      );
      if (data?.success) {
        setCategories(data?.category);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something wwent wrong in getting catgeory");
    }
  };
  useEffect(() => {
    getAllCategory();
  }, []);

  return (
    <>
      <div className="container-fluid m-3 p-3 dashboard">
        <div className="row">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="col-md-9">
            <h1>Create Product</h1>
            <div className="m-1 w-75">
              <Select
                bordered={false}
                placeholder="Select a category"
                size="large"
                showSearch
                className="form-select mb-3"
                onChange={(value) => {
                  setCategory(value);
                }}
              >
                {categories?.map((c) => (
                  <Option key={c._id} value={c._id}>
                    {c.name}
                  </Option>
                ))}
              </Select>

              <div className="mb-3">
                <input
                  type="text"
                  value={name}
                  placeholder="write a title"
                  className="form-control"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  value={company}
                  placeholder="write a company name"
                  className="form-control"
                  onChange={(e) => setCompany(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  value={skill}
                  placeholder="write a Require Skill"
                  className="form-control"
                  onChange={(e) => setSkill(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  value={experince}
                  placeholder="write a Experinece"
                  className="form-control"
                  onChange={(e) => setExperince(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  value={salary}
                  placeholder="write a Experinece"
                  className="form-control"
                  onChange={(e) => setSalary(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <textarea
                  type="text"
                  value={description}
                  placeholder="write a description"
                  className="form-control"
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>

              <div className="mb-3">
                <button className="btn btn-primary">CREATE JOB</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateJob;
