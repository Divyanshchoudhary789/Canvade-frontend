/**
 * SearchForm Component
 * Reusable search form with responsive layout
 * Supports mobile and desktop variants
 */

// import React, { memo, useMemo } from 'react';
// import { FORM_STYLES, FORM_OPTIONS, HERO_CONTENT } from '../constants/heroConstants';

// const ChevronDownIcon = memo(function ChevronDownIcon() {
//   return (
//     <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
//       <svg
//         className="h-4 w-4 text-gray-400"
//         fill="currentColor"
//         viewBox="0 0 20 20"
//         aria-hidden="true"
//       >
//         <path
//           fillRule="evenodd"
//           d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
//           clipRule="evenodd"
//         />
//       </svg>
//     </div>
//   );
// });

// const SelectField = memo(function SelectField({
//   label,
//   name,
//   options,
//   placeholder,
//   value,
//   onChange,
//   onBlur,
// }) {
//   return (
//     <div>
//       <label htmlFor={name} className={`${FORM_STYLES.label} text-xs md:text-sm`}>
//         {label}
//       </label>
//       <div className="relative">
//         <select
//           id={name}
//           name={name}
//           value={value}
//           onChange={onChange}
//           onBlur={onBlur}
//           className={FORM_STYLES.select}
//           aria-label={label}
//         >
//           <option value="" disabled>
//             {placeholder}
//           </option>
//           {options.map((option) => (
//             <option key={option.value} value={option.value}>
//               {option.label}
//             </option>
//           ))}
//         </select>
//         <ChevronDownIcon />
//       </div>
//     </div>
//   );
// });

// const InputField = memo(function InputField({
//   label,
//   name,
//   type = 'text',
//   placeholder,
//   value,
//   onChange,
//   onBlur,
//   required = false,
//   error = '',
// }) {
//   return (
//     <div>
//       <label htmlFor={name} className={`${FORM_STYLES.label} text-xs md:text-sm`}>
//         {label}
//         {required && <span className="text-red-500 ml-1">*</span>}
//       </label>
//       <input
//         id={name}
//         type={type}
//         name={name}
//         value={value}
//         onChange={onChange}
//         onBlur={onBlur}
//         placeholder={placeholder}
//         className={`${FORM_STYLES.input} ${error ? 'border-red-500 ring-red-100' : ''}`}
//         aria-label={label}
//         aria-invalid={!!error}
//         aria-describedby={error ? `${name}-error` : undefined}
//       />
//       {error && (
//         <p id={`${name}-error`} className="mt-1 text-xs text-red-500">
//           {error}
//         </p>
//       )}
//     </div>
//   );
// });

// const SearchForm = memo(function SearchForm({
//   formData,
//   errors,
//   touched,
//   onFieldChange,
//   onFieldBlur,
//   onSubmit,
//   isMobile = false,
//   isTablet = false,
// }) {
//   const gridColsClass = isMobile ? 'grid-cols-1' : 'md:grid-cols-2';

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onSubmit();
//   };

//   const helperText = useMemo(() => HERO_CONTENT.searchHelper, []);

//   return (
//     <form
//       onSubmit={handleSubmit}
//       className={`${isMobile || isTablet ? 'rounded-3xl bg-white' : 'rounded-2xl bg-white'} ${isMobile ? 'p-5' : isTablet ? 'p-8 md:mx-auto md:max-w-2xl' : 'p-6 lg:p-7'}`}
//       noValidate
//       aria-label="Course search form"
//     >
//       {/* Programs & Institutions Input */}
//       <div className={`${isMobile || isTablet ? 'mb-4' : 'mb-5'}`}>
//         <InputField
//           label="Programs & Institutions"
//           name="programs"
//           value={formData.programs || ''}
//           onChange={onFieldChange}
//           onBlur={onFieldBlur}
//           placeholder={HERO_CONTENT.placeholders.programs}
//           required
//           error={touched.programs && errors.programs ? errors.programs : ''}
//         />
//       </div>

//       {/* Location Input */}
//       <div className={`${isMobile || isTablet ? 'mb-4' : 'mb-5'}`}>
//         <InputField
//           label="Location"
//           name="location"
//           value={formData.location || ''}
//           onChange={onFieldChange}
//           onBlur={onFieldBlur}
//           placeholder={HERO_CONTENT.placeholders.location}
//           required
//           error={touched.location && errors.location ? errors.location : ''}
//         />
//       </div>

//       {/* Filter Selects - Row 1 */}
//       <div className={`${isMobile || isTablet ? 'grid grid-cols-2 gap-3 mb-4' : 'grid grid-cols-1 gap-5 mb-5 md:grid-cols-2'}`}>
//         <SelectField
//           label="Search For"
//           name="searchFor"
//           value={formData.searchFor || ''}
//           onChange={onFieldChange}
//           onBlur={onFieldBlur}
//           options={FORM_OPTIONS.searchFor}
//           placeholder="eg. Institutes"
//         />
//         <SelectField
//           label="Fee Range"
//           name="feeRange"
//           value={formData.feeRange || ''}
//           onChange={onFieldChange}
//           onBlur={onFieldBlur}
//           options={FORM_OPTIONS.feeRange}
//           placeholder="eg. ₹0 – ₹5,000"
//         />
//       </div>

//       {/* Filter Selects - Row 2 */}
//       <div className={`${isMobile || isTablet ? 'grid grid-cols-2 gap-3 mb-4' : 'grid grid-cols-1 gap-5 mb-5 md:grid-cols-2'}`}>
//         <SelectField
//           label="Learning Mode"
//           name="learningMode"
//           value={formData.learningMode || ''}
//           onChange={onFieldChange}
//           onBlur={onFieldBlur}
//           options={FORM_OPTIONS.learningMode}
//           placeholder="eg. Hybrid"
//         />
//         <SelectField
//           label="Course Duration"
//           name="courseDuration"
//           value={formData.courseDuration || ''}
//           onChange={onFieldChange}
//           onBlur={onFieldBlur}
//           options={FORM_OPTIONS.courseDuration}
//           placeholder="eg. 0 – 6 Months"
//         />
//       </div>

//       {/* Submit Button and Helper Text */}
//       <div className={`flex flex-col ${isMobile || isTablet ? 'items-center gap-3' : 'items-start gap-3 pt-2'}`}>
//         <button
//           type="submit"
//           className={`${FORM_STYLES.button} ${FORM_STYLES.buttonBase} ${isMobile || isTablet ? 'w-full' : 'md:w-auto px-10'}`}
//           aria-label="Search courses"
//         >
//           Search
//         </button>
//         <p className={`text-xs leading-tight text-red-500 ${isMobile || isTablet ? 'text-center' : 'max-w-sm text-left'}`}>
//           {helperText}
//         </p>
//       </div>
//     </form>
//   );
// });

// export default SearchForm;









import React, { memo, useMemo } from 'react';
import { FORM_STYLES, FORM_OPTIONS, HERO_CONTENT } from '../constants/heroConstants';

/* ── Chevron icon ── */
const ChevronDownIcon = memo(function ChevronDownIcon() {
  return (
    <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
      <svg className="h-4 w-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
        <path
          fillRule="evenodd"
          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
          clipRule="evenodd"
        />
      </svg>
    </div>
  );
});

/* ── Select field ── */
const SelectField = memo(function SelectField({
  label,
  name,
  options,
  placeholder,
  value,
  onChange,
  onBlur,
  compact = false,
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-1.5 block font-bold text-slate-900"
        style={{ fontSize: compact ? '12px' : '13px' }}
      >
        {label}
      </label>
      <div className="relative">
        <select
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          className={FORM_STYLES.select}
          style={{ fontSize: compact ? '12px' : '13px', padding: compact ? '8px 36px 8px 12px' : '10px 36px 10px 14px' }}
          aria-label={label}
        >
          <option value="" disabled>{placeholder}</option>
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>{opt.label}</option>
          ))}
        </select>
        <ChevronDownIcon />
      </div>
    </div>
  );
});

/* ── Input field ── */
const InputField = memo(function InputField({
  label,
  name,
  type = 'text',
  placeholder,
  value,
  onChange,
  onBlur,
  required = false,
  error = '',
  compact = false,
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-1.5 block font-bold text-slate-900"
        style={{ fontSize: compact ? '12px' : '13px' }}
      >
        {label}
        {required && <span className="text-red-500 ml-1" aria-hidden="true">*</span>}
      </label>
      <input
        id={name}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
        className={`${FORM_STYLES.input} ${error ? 'border-red-400 ring-2 ring-red-100' : ''}`}
        style={{ fontSize: compact ? '12px' : '13px', padding: compact ? '8px 12px' : '10px 14px' }}
        aria-label={label}
        aria-invalid={!!error}
        aria-describedby={error ? `${name}-error` : undefined}
      />
      {error && (
        <p id={`${name}-error`} className="mt-1 text-xs text-red-500">{error}</p>
      )}
    </div>
  );
});

/* ── Main form ── */
const SearchForm = memo(function SearchForm({
  formData,
  errors,
  touched,
  onFieldChange,
  onFieldBlur,
  onSubmit,
  isMobile = false,
  isTablet = false,
}) {
  const isCompact = isMobile; // tighter padding on mobile

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit();
  };

  const helperText = useMemo(() => HERO_CONTENT.searchHelper, []);

  /* padding responsive */
  const formPad = isMobile ? 'p-5' : isTablet ? 'p-7' : 'p-7';
  const gap = isMobile ? 'gap-3' : 'gap-4';
  const mbField = isMobile ? 'mb-3' : 'mb-4';

  return (
    <form
      onSubmit={handleSubmit}
      className={`rounded-2xl bg-white ${formPad}`}
      noValidate
      aria-label="Course search form"
    >
      {/* Programs */}
      <div className={mbField}>
        <InputField
          label="Programs & Institutions"
          name="programs"
          value={formData.programs || ''}
          onChange={onFieldChange}
          onBlur={onFieldBlur}
          placeholder={HERO_CONTENT.placeholders.programs}
          required
          compact={isCompact}
          error={touched.programs && errors.programs ? errors.programs : ''}
        />
      </div>

      {/* Location */}
      <div className={mbField}>
        <InputField
          label="Location"
          name="location"
          value={formData.location || ''}
          onChange={onFieldChange}
          onBlur={onFieldBlur}
          placeholder={HERO_CONTENT.placeholders.location}
          required
          compact={isCompact}
          error={touched.location && errors.location ? errors.location : ''}
        />
      </div>

      {/* Search For + Fee Range */}
      <div className={`grid grid-cols-2 ${gap} ${mbField}`}>
        <SelectField
          label="Search For"
          name="searchFor"
          value={formData.searchFor || ''}
          onChange={onFieldChange}
          onBlur={onFieldBlur}
          options={FORM_OPTIONS.searchFor}
          placeholder="eg. Institutes"
          compact={isCompact}
        />
        <SelectField
          label="Fee Range"
          name="feeRange"
          value={formData.feeRange || ''}
          onChange={onFieldChange}
          onBlur={onFieldBlur}
          options={FORM_OPTIONS.feeRange}
          placeholder="eg. 0 – 5000"
          compact={isCompact}
        />
      </div>

      {/* Learning Mode + Duration */}
      <div className={`grid grid-cols-2 ${gap} ${mbField}`}>
        <SelectField
          label="Learning Mode"
          name="learningMode"
          value={formData.learningMode || ''}
          onChange={onFieldChange}
          onBlur={onFieldBlur}
          options={FORM_OPTIONS.learningMode}
          placeholder="eg. Hybrid"
          compact={isCompact}
        />
        <SelectField
          label="Duration"
          name="courseDuration"
          value={formData.courseDuration || ''}
          onChange={onFieldChange}
          onBlur={onFieldBlur}
          options={FORM_OPTIONS.courseDuration}
          placeholder="eg. 0 – 6 Months"
          compact={isCompact}
        />
      </div>

      {/* Submit + helper */}
      <div className={`flex flex-col ${isMobile ? 'items-stretch' : 'items-start'} gap-2 pt-1`}>
        <button
          type="submit"
          className="rounded-lg bg-gray-200 text-slate-800 font-semibold transition-all duration-300 hover:bg-emerald-500 hover:text-white hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-2 focus-visible:outline-emerald-500"
          style={{
            padding: isMobile ? '11px 24px' : '11px 32px',
            fontSize: '14px',
            width: isMobile ? '100%' : 'auto',
          }}
          aria-label="Search courses"
        >
          Search
        </button>
        <p
          className="leading-snug text-red-500"
          style={{ fontSize: isMobile ? '11px' : '12px', maxWidth: '380px' }}
        >
          {helperText}
        </p>
      </div>
    </form>
  );
});

export default SearchForm;