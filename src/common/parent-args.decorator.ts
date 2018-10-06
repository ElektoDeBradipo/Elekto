import { createParamDecorator } from '@nestjs/common';

export const ParentArgs = createParamDecorator(
  (data, [root, args, ctx, info]) => {
    const selection = info.operation.selectionSet.selections[0];
    if (selection) {
      if (data) {
        const arg = selection.arguments.find(a => a.name.value == data);
        return arg ? arg.value.value : undefined;
      } else {
        const args = {};
        selection.arguments.forEach(arg => {
          args[arg.name.value] = arg.value.value;
        });
        return args;
      }
    }

    return undefined;
  },
);
