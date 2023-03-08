/*
 * @Author: wangzhisen
 * @Date: 2023-03-08 17:52:47
 * @Last Modified by: wangzhisen
 * @Last Modified time: 2023-03-08 18:11:23
 *
 * 实现Counter 组件
 * 功能:
 * 手动自增，手动自减，手动归零
 * 点击加载/卸载定时器，开关自增功能
 */

import "./index.less";
import { createSignal, onCleanup } from "solid-js";

export const Counter = () => {
  const [count, setCount] = createSignal(0);
  const [autoRun, setAutoRun] = createSignal(false);

  // 自动递增
  const handleAutoIncrement = () => {
    if (!autoRun()) return;
    setCount(count() + 1);
  };

  // 创建定时器
  const timer = setInterval(() => {
    handleAutoIncrement();
  }, 1000);

  // 实现自增
  const handleIncrement = () => {
    setCount(count() + 1);
  };

  // 实现自减
  const handleDecrement = () => {
    setCount(count() - 1);
  };

  // 实现重置
  const handleReset = () => {
    setCount(0);
  };

  // 切换自增开关
  const handleToggle = () => {
    setAutoRun(!autoRun());
  };

  // 组件卸载时清除计时器
  onCleanup(() => {
    clearInterval(timer);
  });

  return (
    <div class="counter">
      <div class="counter-text">Current count is:{count()}</div>
      <div class="counter-actions">
        <button class="counter-actions-button" onClick={handleIncrement}>
          Increment
        </button>
        <button class="counter-actions-button" onClick={handleDecrement}>
          Decrement
        </button>
        <button class="counter-actions-button" onClick={handleReset}>
          Reset
        </button>
        <button class="counter-actions-button" onClick={handleToggle}>
          {autoRun() ? "Disabled" : "Enabled"} Run
        </button>
      </div>
    </div>
  );
};
