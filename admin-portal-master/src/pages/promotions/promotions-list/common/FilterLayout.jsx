import React, {useEffect, useState} from 'react';
import {Row, Col, Button, Space, Input, DatePicker} from 'antd';
import moment from 'moment';
import {getRegexFilter, getEqualFilter} from '~/helpers/queryString';
import {trans} from '~/components/public/Translate';
import {SelectDefault} from '~/components/public/FormHelpers/SelectBlock';
import {
  PROMOTIONS_TYPE_OPTION,
  PROMOTION_APPLYFOR_OPTION,
} from '~/constants/master-data';
const {RangePicker} = DatePicker;

const TYPE = {
  INPUT: 'INPUT',
  SELECT: 'SELECT',
  DATE_RANGE: 'DATE_RANGE',
};

const options = [
  {
    key: 'name',
    text: 'Name',
    type: TYPE.INPUT,
  },
  {
    key: 'type',
    text: 'Type',
    type: TYPE.SELECT,
    options: PROMOTIONS_TYPE_OPTION,
  },
  {
    key: 'applyFor',
    text: 'Off for',
    type: TYPE.SELECT,
    options: PROMOTION_APPLYFOR_OPTION,
  },
  {
    key: 'startDate',
    text: 'Start Date',
    type: TYPE.DATE_RANGE,
  },
  {
    key: 'endDate',
    text: 'End date',
    type: TYPE.DATE_RANGE,
  },
];

const InputFilter = ({onChangeData, text, keyName, value}) => (
  <Row>
    <Col span={8}>
      <span className={'text-title-default'}>{trans(text)}</span>
    </Col>
    <Col span={16}>
      <Input
        placeholder={`Search`}
        onChange={(e) => onChangeData({[keyName]: e.target.value})}
        value={value}
      />
    </Col>
  </Row>
);

const SelectFilter = ({onChangeData, text, keyName, value, options}) => (
  <Row>
    <Col span={8}>
      <span className={'text-title-default'}>{trans(text)}</span>
    </Col>
    <Col span={16}>
      <SelectDefault
        data={options}
        placeholder={`Search`}
        onChange={(value) => onChangeData({[keyName]: value})}
        value={value}
      />
    </Col>
  </Row>
);

const DateFilter = ({onChangeData, text, keyName, value}) => (
  <Row>
    <Col span={8}>
      <span className={'text-title-default'}>{trans(text)}</span>
    </Col>
    <Col span={16}>
      <RangePicker
        className={'input-default'}
        // locale={locale}
        // suffixIcon={<ButtonCalendarBlueIcon />}
        value={value}
        onChange={(value) => onChangeData({[keyName]: value})}
      />
    </Col>
  </Row>
);

const FilterLayout = ({handleSearchSubmit, dataFilter}) => {
  const [data, setData] = useState({});

  useEffect(() => {
    setData(
      Object.assign(
        {},
        ...(options || []).map((option) => {
          switch (option.type) {
            case TYPE.INPUT:
              return {[option.key]: (dataFilter[option.key] || {}).regex || ''};
            case TYPE.SELECT:
              return {[option.key]: (dataFilter[option.key] || {}).equal || ''};
            case TYPE.DATE_RANGE:
              return {
                [option.key]: dataFilter[option.key] && [
                  moment(dataFilter[option.key].gte),
                  moment(dataFilter[option.key].lte),
                ],
              };
            default:
              return {};
          }
        }),
      ),
    );
  }, [dataFilter]);

  const onChangeData = (obj) => {
    setData({
      ...data,
      ...obj,
    });
  };

  const handleSubmit = () => {
    const params = Object.assign(
      {},
      ...(options || []).map((option) => {
        switch (option.type) {
          case TYPE.INPUT:
            return data[option.key]
              ? getRegexFilter(option.key, data[option.key])
              : {[option.key]: undefined};
          case TYPE.SELECT:
            return data[option.key]
              ? getEqualFilter(option.key, data[option.key])
              : {[option.key]: undefined};
          case TYPE.DATE_RANGE:
            return data[option.key]
              ? {
                  [option.key]: {
                    gte: moment(data[option.key][0])
                      .startOf('day')
                      .toISOString(),
                    lte: moment(data[option.key][1]).endOf('day').toISOString(),
                  },
                }
              : {[option.key]: undefined};
          default:
            return {};
        }
      }),
    );

    handleSearchSubmit && handleSearchSubmit(params);
  };

  const handleReset = () => {
    setData({});
    handleSearchSubmit &&
      handleSearchSubmit(
        Object.assign(
          {},
          ...(options || []).map((option) => ({[option.key]: undefined})),
        ),
      );
  };

  return (
    <div className={`layout_filter_component form-control`}>
      {(options || []).map((item, index) => {
        switch (item.type) {
          case TYPE.INPUT:
            return (
              <InputFilter
                key={index}
                onChangeData={onChangeData}
                text={item.text}
                keyName={item.key}
                value={data[item.key]}
              />
            );
          case TYPE.SELECT:
            return (
              <SelectFilter
                key={index}
                onChangeData={onChangeData}
                text={item.text}
                keyName={item.key}
                value={data[item.key]}
                options={item.options}
              />
            );
          case TYPE.DATE_RANGE:
            return (
              <DateFilter
                key={index}
                onChangeData={onChangeData}
                text={item.text}
                keyName={item.key}
                value={data[item.key]}
              />
            );
          default:
            break;
        }
      })}

      <Row className={'row__space-mid mr-20'}>
        <Col></Col>
        <Col>
          <Space>
            <Button
              className={'btn-quick-filter ant-btn light_default'}
              onClick={handleReset}>
              {trans('Reset')}
            </Button>
            <Button
              className={'btn-quick-filter default'}
              onClick={handleSubmit}>
              {trans('Ok')}
            </Button>
          </Space>
        </Col>
      </Row>
    </div>
  );
};

export default FilterLayout;
