"use server";
import { redirect } from "next/navigation";
import React from "react";

export const defineLayout = (name, ...props) => {
  return new Promise(async (resolve, reject) => {
    try {
      const layout = (await import(`@/components/layouts/${name}.jsx`)).default;

      resolve(layout);
    } catch (e) {
      reject(e);
    }
  });
};

export const applyMiddleware = (PageComponent, parseMiddleware) => {
  const Wrapper = (props) => <PageComponent {...props} />;

  let pageContent = Wrapper;
  let extraProps = {};

  const actionContext = {};

  actionContext.defineProps = (name, props) => {
    extraProps[name] = props;
  };

  actionContext.redirect = (path) => (extraProps.redirect = path);

  actionContext.defineLayout = async (name, ...props) => {
    const LayoutWrapper = await defineLayout(name, ...props);

    pageContent = () => {
      return (
        <LayoutWrapper {...actionContext.extraProps}>
          <Wrapper {...actionContext.extraProps} />
        </LayoutWrapper>
      );
    };
  };

  const initialized = async (...props) => {
    extraProps = {
      ...extraProps,
      ...props[0],
    };
    actionContext.extraProps = extraProps;
    if (parseMiddleware) await parseMiddleware(actionContext, props[0]);
    if (actionContext?.extraProps?.redirect) {
      redirect(actionContext?.extraProps?.redirect);
    }
    const PageContent = pageContent;
    return <PageContent {...extraProps} />;
  };

  return initialized;
};
