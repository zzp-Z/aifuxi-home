import Link from "next/link";

import { Button } from "@/components/ui/button";

import {
  IconBrandGithub,
  IconLogoBing,
  IconLogoGoogle,
  IconSkillCSS,
  IconSkillDocker,
  IconSkillFigmaDark,
  IconSkillFigmaLight,
  IconSkillGolang,
  IconSkillHTML,
  IconSkillJavaDark,
  IconSkillJavaLight,
  IconSkillJavaScript,
  IconSkillMysqlDark,
  IconSkillMysqlLight,
  IconSkillNextjsDark,
  IconSkillNextjsLight,
  IconSkillNginx,
  IconSkillNodejsDark,
  IconSkillNodejsLight,
  IconSkillNuxtjsDark,
  IconSkillNuxtjsLight,
  IconSkillPythonDark,
  IconSkillPythonLight,
  IconSkillRabbitmqDark,
  IconSkillRabbitmqLight,
  IconSkillReactDark,
  IconSkillReactLight,
  IconSkillTailwindcssDark,
  IconSkillTailwindcssLight,
  IconSkillTypeScript,
  IconSkillVuejsDark,
  IconSkillVuejsLight,
  IconVscodeGoZero,
} from "@/components/icons";
import { IconLogoUbuntu } from "@/components/icons/logos/icon-logo-ubuntu";

import { NICKNAME } from "@/constants";
import { socialMediaList } from "@/features/home";

export const revalidate = 60;

export default function Page() {
  let delay = 0;

  // 每次调用，增加延时
  const getDelay = () => (delay += 200);

  return (
    <div className="flex w-full flex-col justify-center px-6 pb-24 pt-8">
      <section className="w-screen-wrapper prose prose-neutral mx-auto max-w-screen-wrapper dark:prose-invert">
        <h2 className="text-3xl font-bold md:text-4xl">关于</h2>
        <div
          className="animate-fade-up animate-ease-in-out"
          style={{
            animationDelay: `${getDelay()}ms`,
          }}
        >
          <h2>我是谁</h2>
          <p>Hi~ 我是{NICKNAME}</p>
        </div>

        <div
          className="animate-fade-up animate-ease-in-out"
          style={{
            animationDelay: `${getDelay()}ms`,
          }}
        >
          <h2>我的技能</h2>
        </div>

        <div
          className="animate-fade-up animate-ease-in-out"
          style={{
            animationDelay: `${getDelay()}ms`,
          }}
        >
          <h3>前端</h3>
          <ul>
            <li>
              <IconSkillHTML className="mx-1 translate-y-0.5" /> HTML +
              <IconSkillCSS className="mx-1 translate-y-0.5" />
              CSS + <IconSkillJavaScript className="mx-1 translate-y-0.5" />
              JavaScript ，略知一二
            </li>
            <li>
              <IconSkillTypeScript className="mx-1 translate-y-0.5" />
              TypeScript +
              <>
                <IconSkillReactLight className="mx-1 translate-y-0.5 dark:hidden" />
                <IconSkillReactDark className="mx-1 hidden translate-y-0.5 dark:inline-block" />
              </>
              React +
              <>
                <IconSkillNextjsLight className="mx-1 translate-y-0.5 dark:hidden" />
                <IconSkillNextjsDark className="mx-1 hidden translate-y-0.5 dark:inline-block" />
              </>
              Next.js +
              <>
                <IconSkillVuejsLight className="mx-1 translate-y-0.5 dark:hidden" />
                <IconSkillVuejsDark className="mx-1 hidden translate-y-0.5 dark:inline-block" />
              </>
              Vue.js +
              <>
                <IconSkillNuxtjsLight className="mx-1 translate-y-0.5 dark:hidden" />
                <IconSkillNuxtjsDark className="mx-1 hidden translate-y-0.5 dark:inline-block" />
              </>
              Nuxt.js +
              <>
                <IconSkillTailwindcssLight className="mx-1 translate-y-0.5 dark:hidden" />
                <IconSkillTailwindcssDark className="mx-1 hidden translate-y-0.5 dark:inline-block" />
              </>
              Tailwind CSS，略知一二
            </li>
          </ul>
        </div>
        <div
          className="animate-fade-up animate-ease-in-out"
          style={{
            animationDelay: `${getDelay()}ms`,
          }}
        >
          <h3>后端</h3>
          <ul>
            <li>
              <>
                <IconSkillJavaLight className="mx-1 translate-y-0.5 dark:hidden" />
                <IconSkillJavaDark className="mx-1 hidden translate-y-0.5 dark:inline-block" />
              </>
              Java +
              <>
                <IconSkillGolang className="mx-1 translate-y-0.5" />
              </>
              Golang +
              <>
                <IconSkillNodejsLight className="mx-1 translate-y-0.5 dark:hidden" />
                <IconSkillNodejsDark className="mx-1 hidden translate-y-0.5 dark:inline-block" />
              </>
              Node.js +
              <>
                <IconSkillPythonLight className="mx-1 translate-y-0.5 dark:hidden" />
                <IconSkillPythonDark className="mx-1 hidden translate-y-0.5 dark:inline-block" />
              </>
              Python
            </li>
            <li>
              <>
                <IconVscodeGoZero className="mx-1 translate-y-0.5" />
              </>
              Microservices +
              <>
                <IconSkillRabbitmqLight className="mx-1 translate-y-0.5 dark:hidden" />
                <IconSkillRabbitmqDark className="mx-1 hidden translate-y-0.5 dark:inline-block" />
              </>
              Message Queue +
              <>
                <IconSkillMysqlLight className="mx-1 translate-y-0.5 dark:hidden" />
                <IconSkillMysqlDark className="mx-1 hidden translate-y-0.5 dark:inline-block" />
              </>
              Database
            </li>
          </ul>
        </div>
        <div
          className="animate-fade-up animate-ease-in-out"
          style={{
            animationDelay: `${getDelay()}ms`,
          }}
        >
          <h3>其它</h3>
          <ul>
            <li>
              <IconLogoUbuntu className="mx-1 translate-y-0.5" />
              Ubuntu
            </li>
            <li>
              <IconSkillDocker className="mx-1 translate-y-0.5" />
              Docker （配置服务是真的方便）
            </li>
            <li>
              使用
              <span>
                <IconSkillNginx className="mx-1 translate-y-0.5" />
                NGINX 配置 反向代理 + HTTPS
              </span>
            </li>
            <li>
              <>
                <IconSkillFigmaLight className="mx-1 translate-y-0.5 dark:hidden" />
                <IconSkillFigmaDark className="mx-1 hidden translate-y-0.5 dark:inline-block" />
              </>
              Figma，只会用来看
            </li>
            <li>
              熟练使用 <IconLogoGoogle className="mx-1 translate-y-0.5" />
              Google/
              <IconLogoBing className="mx-1 translate-y-0.5" />
              Bing 搜索 +
              <IconBrandGithub className="mx-1 translate-y-0.5" />
              GitHub + Chat GPT 解决遇到的各种问题，复制粘贴我最行 🙋
            </li>
          </ul>
        </div>

        <div
          className="animate-fade-up animate-ease-in-out"
          style={{
            animationDelay: `${getDelay()}ms`,
          }}
        >
          <h2>联系我</h2>
          <p>你可以通过👇下面任意一种方式联系我</p>
          <ul className="!mb-0 flex !list-none items-center space-x-4 !pl-0">
            {socialMediaList.map((el) => (
              <li key={el.link}>
                <Button asChild variant="outline" size="icon">
                  <Link href={el.link} target="_blank">
                    {el.icon}
                  </Link>
                </Button>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
