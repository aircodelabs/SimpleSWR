# SimpleSWR
SimpleSWR is a lightweight and efficient caching adapter for Axios (A simple Axios cache), implementing the Stale While Revalidate (SWR) strategy. It's designed to enhance the performance of HTTP requests by caching responses and revalidating them in the background.

Because of its simplicity, it can be used in a variety of repositories for data state management, including Vue's Pinia.

## Key Features:

- Efficient Caching: Reduce network load by caching Axios responses.
- SWR Strategy: Automatically revalidate cached data to ensure freshness.
- Easy Integration: Seamlessly integrates with existing Axios instances.

## Installation

```
npm i simple-swr
```

## Quick Start

```javascript
// Example of using SimpleSWR
import simpleSWR from 'simple-swr';

// Fetch response with caching
const response = await simpleSWR.get('/api/example');
const data = response.data;
```

### Parameters

```javascript
// You can also setup cache duration
simpleSWR.setup({ cacheDuration: 1000 * 60 * 5 });
```

