import Vue from 'vue';
import { extend, ValidationObserver, ValidationProvider } from 'vee-validate';
import {
  max,
  min,
  required,
  //required_if,
  integer,
  confirmed,
  email,
} from 'vee-validate/dist/rules';

/*
extend('max', {
  validate: (value, { length }) => value && value.length <= length,
  params: ['length'],
  message: '{_field_}는 {length}자를 초과할 수 없습니다.',
});
*/
extend('max', {
  ...max,
  message: '{_field_} 항목은 {length}자를 초과할 수 없습니다.',
});
extend('min', {
  ...min,
  message: '{_field_} 항목을 {length}자 이상 입력해 주세요.',
});
extend('required', {
  ...required,
  message: '{_field_} 항목을 입력해 주세요.',
});
extend('requiredMsg', {
  ...required,
  message: '{_field_}',
});
extend('alpha_num', {
  validate: value => {
    var regExp = /^[a-zA-Z0-9]*$/;
    return regExp.test(value) ? true : false;
  },
  message: '{_field_} 항목은 영문 또는 숫자만 입력 가능합니다.',
});
extend('integer', {
  ...integer,
  message: '{_field_}는 정수만 입력 가능합니다.',
});
extend('number', {
  validate: value => {
    var regExp = /^[0-9]*$/;
    return regExp.test(value) ? true : false;
  },
  message: '{_field_}는 숫자만 입력 가능합니다.',
});
extend('float', {
  validate: (value, { precision }) => {
    value = value.toString();
    let pos = value.indexOf('.');
    return pos == -1 || value.substr(pos + 1).length <= precision;
  },
  params: ['precision'],
  message: '{_field_}는 소수점 {precision}자리 까지 입력 가능합니다.',
});
extend('max_byte', {
  validate: (value, { length }) => {
    return (
      value &&
      (function (s, b, i, c) {
        for (
          b = i = 0;
          (c = s.charCodeAt(i++));
          b += c >> 11 ? 3 : c >> 7 ? 2 : 1
        );
        return b;
      })(value) <= length
    );
  },
  params: ['length'],
  message: '{_field_}는 {length}byte를 초과할 수 없습니다.',
});
extend('confirmed', {
  ...confirmed,
  message: '{_field_}가 일치하지 않습니다.',
});
extend('email', {
  ...email,
  message: '{_field_}이 올바르지 않습니다.',
});
extend('phone', {
  validate: value => {
    /* var regPhone = /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/;
    return regPhone.test(value); */
    var start = /^\d{2,3}$/;
    var regExp = /^\d{3}-\d{3,4}-\d{4}$/;
    var startStr = value.substr(0, value.indexOf('-'));
    if (start.test(startStr)) {
      regExp = /^\d{2,3}-\d{3,4}-\d{4}$/;
    } else {
      regExp = /^\d{3}-\d{3,4}-\d{4}$/;
    }
    // return regExp.test(value) ? true : false;
    return regExp.test(value);
  },
  message: '{_field_}가 올바르지 않습니다.',
});
extend('min_value', {
  validate: (value, { minValue }) => {
    return +value >= +minValue;
  },
  params: ['minValue'],
  message: '{_field_}는 {minValue}보다 큰 값을 입력하세요.',
});
extend('password', {
  params: ['target'],
  validate: (value, { target }) => {
    console.log(value, target);
    return value === target;
  },
  message: '비밀번호가 일치하지 않습니다.',
});
extend('agree', {
  validate: value => {
    return value;
  },
  message: '이용약관을 모두 동의하세요.',
});
Vue.component('ValidationObserver', ValidationObserver);
Vue.component('ValidationProvider', ValidationProvider);
