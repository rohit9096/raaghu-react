import { RdsCheckbox, RdsLabel, RdsSelectList } from "../rds-elements";
import React, { FormEventHandler, useState, useEffect } from "react";
import { RdsInput, RdsTextArea, RdsButton } from "../rds-elements";

export interface RdsCompNewClaimTypeProps {
  name?: string;
  regex?: string;
  value?: string;
  regexDesc?: string;
  desc?: string;
  onSubmit: any;
  claimsData?: any;
  valueType?: any;
}

const RdsCompNewClaimType = (props: RdsCompNewClaimTypeProps) => {
  const [data, setData] = useState(props.claimsData);
  useEffect(() => {
    setData(props.claimsData);
  }, [props.claimsData]);

  const allFieldsAreEmpty = Object.values(data).every((value) => value === "");

  const onNameChangeHandler = (e: any) => {
    setData({ ...data, name: e.target.value });
  };
  const onRegexChangeHandler = (e: any) => {
    setData({ ...data, regex: e.target.value });
  };
  const onValueChangeHandler = (e: any) => {
    
    setData({ ...data, valueType: e});

  };
  const onRegexDescChangeHandler = (e: any) => {
    setData({ ...data, regexDescription: e.target.value });
  };
  const onDescChangeHAndler = (e: any) => {
    setData({ ...data, description: e.target.value });
  };
  const setDevice = (e: any) => {
    setData({ ...data, required: e });
  };
  return (
    <>
      <>
        <div className="row">
          <RdsInput
            label="Name"
            value={data.name}
            placeholder="Enter  name"
            required={true}
            name="name"
            onChange={onNameChangeHandler}
          />
        </div>
        <div className="row">
          <div className="col-6">
            {" "}
            <RdsInput
              label="Regex"
              value={data.regex}
              placeholder="enter regex"
              name="regex"
              required={true}
              onChange={onRegexChangeHandler}
            />
          </div>
          <div className="col-6">
          <RdsLabel label="Value Type" class="pb-2" />
            <RdsSelectList
              label={"Value Type"}
              selectItems={props.valueType}
              selectedValue={data.valueType}
              selectedOption={data.valueTypeAsString}
              onSelectListChange={onValueChangeHandler}
            ></RdsSelectList>
          </div>
        </div>
        <div className="row">
          <RdsInput
            label="Regex Description"
            value={data.regexDescription}
            placeholder="enter regex description"
            name="regexDesc"
            required={true}
            onChange={onRegexDescChangeHandler}
          />
        </div>
        <div className="row">
          <RdsTextArea
            label="Description"
            placeholder="enter description"
            onChange={onDescChangeHAndler}
            value={data.description}
            rows={3}
          />
        </div>
        <div className="row pt-2">
          <RdsCheckbox
            label="Required"
            onChange={e => { setDevice(e.target.checked) }}
            checked={data.required}
          ></RdsCheckbox>
        </div>
        <div className="d-flex footer-buttons">
          <RdsButton
            label="CANCEL"
            databsdismiss="offcanvas"
            type={"button"}
            size="small"
            isOutline={true}
            colorVariant="primary"
            class="me-2"
          ></RdsButton>
          <RdsButton
            label="SAVE"
            type={"button"}
            size="small"
            databsdismiss="offcanvas"
            isDisabled={allFieldsAreEmpty}
            colorVariant="primary"
            class="me-2"
            onClick={() => {
              props.onSubmit(data);
            }}
          ></RdsButton>
        </div>
      </>
    </>
  );
};

export default RdsCompNewClaimType;
