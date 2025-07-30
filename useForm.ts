
import { useState, useCallback } from 'react';

interface UseFormProps<T> {
  initialValues: T;
  validate: (values: T) => Partial<Record<keyof T, string>>;
  onSubmit: (values: T) => void;
}

export const useForm = <T extends Record<string, any>>({
  initialValues,
  validate,
  onSubmit,
}: UseFormProps<T>) => {
  const [values, setValues] = useState<T>(initialValues);
  const [errors, setErrors] = useState<Partial<Record<keyof T, string>>>({});

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    
    if (type === 'file') {
        const files = (e.target as HTMLInputElement).files;
        setValues(prev => ({ ...prev, [name]: files }));
    } else if (type === 'checkbox') {
        const checked = (e.target as HTMLInputElement).checked;
        setValues(prev => ({ ...prev, [name]: checked }));
    }
    else {
        setValues(prev => ({ ...prev, [name]: value }));
    }
  }, []);

  const handleSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      onSubmit(values);
    }
  }, [values, validate, onSubmit]);
  
  const setFieldValue = useCallback((field: keyof T, value: any) => {
    setValues(prev => ({ ...prev, [field]: value }));
  }, []);
  
  const resetForm = useCallback(() => {
    setValues(initialValues);
    setErrors({});
  }, [initialValues]);

  return {
    values,
    errors,
    handleChange,
    handleSubmit,
    setFieldValue,
    resetForm,
  };
};