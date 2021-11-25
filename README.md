# netlify-cms-widget-scheduler>

<!-- [Check out a demo!](https://replace-with-widget-name.netlify.com/demo) -->

A widget to create scheduled events with a date, start times, end times, and support for recurrence.

## Install

As an npm package:

```shell
npm install --save netlify-cms-widget-scheduler
```

```js
import scheduler from 'netlify-cms-widget-scheduler'

CMS.registerWidget('scheduler', schedulerControl, schedulerPreview)
```

Via `script` tag:

```html
<script src="https://unpkg.com/netlify-cms-widget-scheduler@^1.0.0"></script>

<script>
  CMS.registerWidget('scheduler', schedulerControl, schedulerPreview)
</script>
```

## How to use

Add to your Netlify CMS configuration:

```yaml
    fields:
      - { name: <fieldname>, label: <fieldlabel>, widget: scheduler }
```

## Configuration

TODO

## Support

For help with this widget, open an [issue](https://github.com/marc-trius/netlify-cms-widget-scheduler) or ask the Netlify CMS community in [Gitter](https://gitter.im/netlify/netlifycms).
