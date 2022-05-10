let vxFormPlugin = {};

vxFormPlugin.install = Vue => {
  Vue.prototype.$vxForm = {
    isValid: async function (validator, useAlert = true) {
      const { isValid, errors } = await validator.validateWithInfo();
      // console.log('===========', await validator.validateWithInfo());
      if (isValid == false) {
        for (const key in errors) {
          if (errors[key].length) {
            if (useAlert) {
              Vue.vxAlert(errors[key][0]);
            }
            return isValid;
          }
        }
      }
      return true;
    },
  };
};
export default vxFormPlugin;
