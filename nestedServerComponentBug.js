In Next.js 15, an uncommon issue arises when using server components with deeply nested data fetching.  If a deeply nested component relies on data fetched in a parent server component, and an error occurs during the fetching in the parent, the error might not propagate correctly to the deeply nested component. This can lead to silent failures where the nested component renders with stale or missing data, without any visible error message.  This is particularly tricky to debug because the actual error might be hidden several levels up the component tree.